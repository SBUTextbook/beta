import React from 'react';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Grid, Table, TableHeaderRow, TableFilterRow } from '@devexpress/dx-react-grid-material-ui';
import { DataTypeProvider, SortingState, IntegratedSorting, FilteringState, IntegratedFiltering } from '@devexpress/dx-react-grid';
import axios from 'axios';
import TextbookUploadForm from './TextbookUploadForm';

const columns = [
    { name: 'course', title: 'Course' },
    { name: 'textbook', title: 'Textbook' },
    { name: 'linkInfo', title: 'Download' },
];

const LibgenLinkFormatter = ({ value }) => {
    return (
        <span>
            <a href={`http://gen.lib.rus.ec/book/index.php?md5=${value.md5}`}>Download </a>
            <a href={`https://library.bz/main/uploads/${value.md5}`}
            style={{visibility: `${ value.age < 2 * (24 * 60 * 60 * 1000) ? 'visible' : 'hidden'}`, fontSize: '0.8em' }}>(alternate download)</a>
        </span>
    );
} 

const LibgenLinkProvider = props => (
  <DataTypeProvider
    formatterComponent={LibgenLinkFormatter}
    {...props}
  />
);

export default class TextbookList extends React.Component {
    state = {
        textbooks: [],
        search: '',
        loaded: false,
    };

    async componentDidMount() {
        
        const url = 'https://sbutextbooks.herokuapp.com/books';
        const res = await axios.get(url);
        this.setState({
            textbooks: res.data.textbooks.map((textbook) => {
                return {
                    course: textbook.course.toUpperCase(),
                    textbook: `${textbook.title} (${textbook.edition} edition),
                               ${textbook.author}`,
                    linkInfo: { md5: textbook.md5, age: Date.now() - new Date(textbook.createdAt).getTime() }, // age is in ms
                };
            })
        });
        this.setState({ loaded: true });
    }
    render() {
        if (!this.state.loaded) {
            return <span>Loading...</span>
        }
        return (
            <div style={{margin: '2em'}}>
                <Autocomplete
                    options={this.state.textbooks.map(textbook => textbook.course).sort()}
                    renderInput={(params) => <TextField {...params} label="Course" variant="outlined" 
                    onChange={event => this.setState({ search: event.target.value })}
                    />}
                />
                <button>Upload</button>
                <Paper>
                    <Grid rows={this.state.textbooks.filter(textbook => textbook.course.includes(this.state.search.toUpperCase()))} columns={columns}>
                        <SortingState defaultSorting={[{ columnName: 'course', direction: 'asc' }]} />
                        <IntegratedSorting />
                        <LibgenLinkProvider for={['linkInfo']} />
                        <Table />
                        <TableHeaderRow />
                    </Grid>
                </Paper>
            </div>
        )
    }
}