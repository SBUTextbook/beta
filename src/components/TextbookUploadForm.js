import React from 'react';
import axios from 'axios';
import { Button, Form, Input, Textarea } from 'muicss/react';
import Qs from 'qs';
import CryptoJS from 'crypto-js';

export default class TextbookUploadForm extends React.Component {
    state = {
        title: '',
        author: '',
        pages: '',
        description: '',
        edition: '',
        year: '',
        language: '',
        publisher: '',
        isbn: '',
        issn: '',
        courseDepartment: '',
        courseCode: '',
        libgenLink: '',
    };

    async getMd5(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = (e) => {
            var wordArray = CryptoJS.lib.WordArray.create(reader.result);
            resolve(CryptoJS.MD5(wordArray).toString());
          };
          reader.onerror = (e) => {
            reject(e);
          };
          reader.readAsArrayBuffer(file);
        });
      }

    async formSubmit(e) {
        e.preventDefault();
        const form = document.getElementById('file');
        let md5;
        const formData = new FormData();

        if (form.files[0]) {
            formData.append("file", form.files[0]);
            md5 = await this.getMd5(form.files[0]);
        } else {
            if (this.state.libgenLink.includes('/book/index.php?md5=')) {
                md5 = this.state.libgenLink.substring(this.state.libgenLink.indexOf('md5=') + 4);
            } else {
                alert('Invalid libgen link provided!');
                return;
            }
        }

        const { title, author, pages, description, edition, year, publisher, isbn, issn, courseDepartment, courseCode, language } = this.state;

        let body = { title, author, pages, description, edition, year, publisher, isbn, issn, courseDepartment, courseCode, language };

        try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/http://gen.lib.rus.ec/book/index.php?md5=${md5}`);
            if (response.status === 200) {
                console.log("Already on libgen.");
                const books = await axios.get('https://sbutextbooks.herokuapp.com/books');
                for (const book of books.data.textbooks) {
                    if (book.md5 === md5 && book.courseDepartment === courseDepartment && book.courseCode === courseCode) {
                        return;
                    }
                }
                body = { title, author, pages, description, edition, year, publisher, isbn, issn, courseDepartment, courseCode, language, md5 };
                try {
                    await axios({
                        method: 'POST',
                        url: 'https://sbutextbooks.herokuapp.com/upload',
                        data: Qs.stringify(body),
                    });
                    alert('Upload complete.')
                } catch(err) {
                    alert(`Upload failed! ${err}`)
                }
                return;
            }
        } catch(err) {
            console.log('not found on libgen... uploading...');
        }

        axios({
            method: 'POST',
            url: 'https://cors-anywhere.herokuapp.com/https://library.bz/main/upload/',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' },
            auth: { username: 'genesis', password: 'upload' },
            })
            .then((response) => {
                let url = response.headers['x-final-url'];
                url = `https://cors-anywhere.herokuapp.com/${url}`;
                axios({
                    url,
                    method: 'POST',
                    auth: { username: 'genesis', password: 'upload' },
                    data: Qs.stringify(body),
                })
                .then(async (response) => {
                    if (response.data.toString().includes('The file is already in the upload queue and awaiting moderation')) {
                        alert('File already uploaded and awaiting moderation.');
                        return;
                    } else if (!response.data.toString().includes('The record has been successfully saved.')) {
                        let error = response.data.toString();
                        error = error.substring(error.indexOf('form_error'), error.indexOf('<legend>Content properties</legend>'))
                        alert(`Upload failed, LibGen rejected the file.`);
                        return;
                    } else {
                        body = { title, author, pages, description, edition, year, publisher, isbn, issn, courseDepartment, courseCode, language, md5 };
                        try {
                            await axios({
                                method: 'POST',
                                url: 'https://sbutextbooks.herokuapp.com/upload',
                                data: Qs.stringify(body),
                            });
                            alert('Upload successful!');
                        } catch(err) {
                            alert(`Upload failed, server error ${err}`);
                        }
                        return;
                    }
                });
            })
            .catch((response) => {
                alert(response);
            });
    }

    render() {
        return (
            <div style={{margin: '2em'}}>
                <Form onSubmit={event => this.formSubmit(event)}>
                    <legend>Upload a Textbook</legend>
                    <Input id="file" type="file" required={!this.state.libgenLink} />
                    <Input label="Libgen Link*" onChange={e => this.setState({libgenLink: e.target.value})} placeholder="LibGen Link" />
                    <Input label="Title*" onChange={e => this.setState({title: e.target.value})} placeholder="Title" required={true} />
                    <Input label="Author*" onChange={e => this.setState({author: e.target.value})} placeholder="Author" required={true} />
                    <Input label="Page Count" onChange={e => this.setState({pages: e.target.value})} placeholder="Page Count" />
                    <Textarea label="Description" onChange={e => this.setState({description: e.target.value})} placeholder="Description (optional)" />
                    <Input label="Edition*" onChange={e => this.setState({edition: e.target.value})} placeholder="ex. 1st, 2nd, 5th, etc." required={true} />
                    <Input label="Language*" onChange={e => this.setState({language: e.target.value})} placeholder="Language" required={true} />
                    <Input label="Release Year" onChange={e => this.setState({year: e.target.value})} placeholder="Release Year" />
                    <Input label="Publisher" onChange={e => this.setState({publisher: e.target.value})} placeholder="Publisher" />
                    <Input label="ISBN*" onChange={e => this.setState({isbn: e.target.value})} placeholder="ISBN" required={true} />
                    <Input label="ISSN" onChange={e => this.setState({issn: e.target.value})} placeholder="ISSN" />
                    <Input label="Course Department" onChange={e => this.setState({courseDepartment: e.target.value})} placeholder="ex. AMS, CSE, BIO, etc." required={true} />
                    <Input label="Course Code" onChange={e => this.setState({courseCode: e.target.value})} placeholder="ex. 101, 300, etc." required={true} />
                    <Button variant="raised">Submit</Button>
                </Form>
            </div>
        );
    }
}
