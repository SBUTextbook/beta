(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{232:function(e,t,a){e.exports=a(404)},237:function(e,t,a){},284:function(e,t){},286:function(e,t){},297:function(e,t){},299:function(e,t){},326:function(e,t){},328:function(e,t){},329:function(e,t){},335:function(e,t){},337:function(e,t){},355:function(e,t){},358:function(e,t){},374:function(e,t){},377:function(e,t){},404:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),u=a.n(o),c=(a(237),a(211)),i=a(20),s=a(45),l=a.n(s),p=a(69),d=a(93),h=a(94),m=a(105),b=a(104),f=a(446),g=a(454),v=a(455),k=a(452),x=a(83),E=a(8),y=a(49),C=a.n(y),S=[{name:"course",title:"Course"},{name:"textbook",title:"Textbook"},{name:"md5",title:"Download"}],w=function(e){var t=e.value;return r.a.createElement("span",null,r.a.createElement("a",{href:"http://gen.lib.rus.ec/book/index.php?md5=".concat(t)},"Download "))},I=function(e){return r.a.createElement(E.b,Object.assign({formatterComponent:w},e))},O=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={textbooks:[],search:"",loaded:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://sbutextbooks.herokuapp.com/books",e.next=3,C.a.get("https://sbutextbooks.herokuapp.com/books");case 3:t=e.sent,this.setState({textbooks:t.data.textbooks.map((function(e){return{course:"".concat(e.course.toUpperCase().substring(0,3)," ").concat(e.course.substring(3)),textbook:"".concat(e.title," (").concat(e.edition," edition),\n                               ").concat(e.author),md5:e.md5,approved:e.approved}}))}),this.setState({loaded:!0});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loaded?r.a.createElement("div",{style:{margin:"2em"}},r.a.createElement("a",{href:"https://sbutextbook.github.io/client/#/upload/"},r.a.createElement(k.a,{style:{backgroundColor:"grey"}},"Upload")),r.a.createElement("hr",null),r.a.createElement(g.a,{options:this.state.textbooks.map((function(e){return e.course})).sort(),renderInput:function(t){return r.a.createElement(v.a,Object.assign({},t,{label:"Course",variant:"outlined",onChange:function(t){return e.setState({search:t.target.value})}}))}}),r.a.createElement(f.a,null,r.a.createElement(x.a,{rows:this.state.textbooks.filter((function(t){return t.approved&&t.course.includes(e.state.search.toUpperCase())})),columns:S},r.a.createElement(E.k,{defaultSorting:[{columnName:"course",direction:"asc"}]}),r.a.createElement(E.h,null),r.a.createElement(I,{for:["md5"]}),r.a.createElement(x.b,null),r.a.createElement(x.c,{defaultColumnWidths:[{columnName:"course",width:180},{columnName:"textbook",width:1200},{columnName:"md5",width:180}]}),r.a.createElement(x.d,null)))):r.a.createElement("span",null,"Loading...")}}]),a}(r.a.Component),D=a(212),j=a(24),L=a(108),T=a.n(L),A=a(130),q=a.n(A),N=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:"",author:"",pages:"",description:"",edition:"",year:"",language:"",publisher:"",isbn:"",issn:"",courseDepartment:"",courseCode:"",libgenLink:""},e}return Object(h.a)(a,[{key:"getMd5",value:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n=new FileReader;n.onloadend=function(t){var a=q.a.lib.WordArray.create(n.result);e(q.a.MD5(a).toString())},n.onerror=function(e){a(e)},n.readAsArrayBuffer(t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"formSubmit",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var a,n,r,o,u,c,i,s,d,h,m,b,f,g,v,k,x,E,y,S,w;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=document.getElementById("file"),r=new FormData,!a.files[0]){e.next=10;break}return r.append("file",a.files[0]),e.next=7,this.getMd5(a.files[0]);case 7:n=e.sent,e.next=16;break;case 10:if(!this.state.libgenLink.includes("/book/index.php?md5=")){e.next=14;break}n=this.state.libgenLink.substring(this.state.libgenLink.indexOf("md5=")+4),e.next=16;break;case 14:return alert("Invalid libgen link provided!"),e.abrupt("return");case 16:return o=this.state,u=o.title,c=o.author,i=o.pages,s=o.description,d=o.edition,h=o.year,m=o.publisher,b=o.isbn,f=o.issn,g=o.courseDepartment,v=o.courseCode,k=o.language,x={title:u,author:c,pages:i,description:s,edition:d,year:h,publisher:m,isbn:b,issn:f,courseDepartment:g,courseCode:v,language:k},e.prev=18,e.next=21,C.a.get("https://cors-anywhere.herokuapp.com/http://gen.lib.rus.ec/book/index.php?md5=".concat(n));case 21:if(200!==e.sent.status){e.next=55;break}return console.log("Already on libgen."),e.next=26,C.a.get("https://sbutextbooks.herokuapp.com/books");case 26:E=e.sent,y=Object(D.a)(E.data.textbooks),e.prev=28,y.s();case 30:if((S=y.n()).done){e.next=36;break}if((w=S.value).md5!==n||w.courseDepartment!==g||w.courseCode!==v){e.next=34;break}return e.abrupt("return");case 34:e.next=30;break;case 36:e.next=41;break;case 38:e.prev=38,e.t0=e.catch(28),y.e(e.t0);case 41:return e.prev=41,y.f(),e.finish(41);case 44:return x={title:u,author:c,pages:i,description:s,edition:d,year:h,publisher:m,isbn:b,issn:f,courseDepartment:g,courseCode:v,language:k,md5:n},e.prev=45,e.next=48,C()({method:"POST",url:"https://sbutextbooks.herokuapp.com/upload",data:T.a.stringify(x)});case 48:alert("Upload complete."),e.next=54;break;case 51:e.prev=51,e.t1=e.catch(45),alert("Upload failed! ".concat(e.t1));case 54:return e.abrupt("return");case 55:e.next=60;break;case 57:e.prev=57,e.t2=e.catch(18),console.log("not found on libgen... uploading...");case 60:C()({method:"POST",url:"https://cors-anywhere.herokuapp.com/https://library.bz/main/upload/",data:r,headers:{"Content-Type":"multipart/form-data"},auth:{username:"genesis",password:"upload"}}).then((function(e){var t=e.headers["x-final-url"];t="https://cors-anywhere.herokuapp.com/".concat(t),C()({url:t,method:"POST",auth:{username:"genesis",password:"upload"},data:T.a.stringify(x)}).then(function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.data.toString().includes("The record has been successfully saved.")||!t.data.toString().includes("The file is already in the upload queue and awaiting moderation")){e.next=5;break}return alert("File already uploaded and awaiting moderation."),e.abrupt("return");case 5:return x={title:u,author:c,pages:i,description:s,edition:d,year:h,publisher:m,isbn:b,issn:f,courseDepartment:g,courseCode:v,language:k,md5:n},e.prev=6,e.next=9,C()({method:"POST",url:"https://sbutextbooks.herokuapp.com/upload",data:T.a.stringify(x)});case 9:alert("Upload successful!"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),alert("Upload failed, server error ".concat(e.t0));case 15:return e.abrupt("return");case 16:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}())})).catch((function(e){alert(e)}));case 61:case"end":return e.stop()}}),e,this,[[18,57],[28,38,41,44],[45,51]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{margin:"2em"}},r.a.createElement(j.Form,{onSubmit:function(t){return e.formSubmit(t)}},r.a.createElement("legend",null,"Upload a Textbook"),r.a.createElement(j.Input,{id:"file",type:"file",required:!this.state.libgenLink}),r.a.createElement(j.Input,{label:"Libgen Link*",onChange:function(t){return e.setState({libgenLink:t.target.value})},placeholder:"LibGen Link"}),r.a.createElement(j.Input,{label:"Title*",onChange:function(t){return e.setState({title:t.target.value})},placeholder:"Title",required:!0}),r.a.createElement(j.Input,{label:"Author*",onChange:function(t){return e.setState({author:t.target.value})},placeholder:"Author",required:!0}),r.a.createElement(j.Input,{label:"Page Count",onChange:function(t){return e.setState({pages:t.target.value})},placeholder:"Page Count"}),r.a.createElement(j.Textarea,{label:"Description",onChange:function(t){return e.setState({description:t.target.value})},placeholder:"Description (optional)"}),r.a.createElement(j.Input,{label:"Edition*",onChange:function(t){return e.setState({edition:t.target.value})},placeholder:"ex. 1st, 2nd, 5th, etc.",required:!0}),r.a.createElement(j.Input,{label:"Language*",onChange:function(t){return e.setState({language:t.target.value})},placeholder:"Language",required:!0}),r.a.createElement(j.Input,{label:"Release Year",onChange:function(t){return e.setState({year:t.target.value})},placeholder:"Release Year"}),r.a.createElement(j.Input,{label:"Publisher",onChange:function(t){return e.setState({publisher:t.target.value})},placeholder:"Publisher"}),r.a.createElement(j.Input,{label:"ISBN*",onChange:function(t){return e.setState({isbn:t.target.value})},placeholder:"ISBN",required:!0}),r.a.createElement(j.Input,{label:"ISSN",onChange:function(t){return e.setState({issn:t.target.value})},placeholder:"ISSN"}),r.a.createElement(j.Input,{label:"Course Department",onChange:function(t){return e.setState({courseDepartment:t.target.value})},placeholder:"ex. AMS, CSE, BIO, etc.",required:!0}),r.a.createElement(j.Input,{label:"Course Code",onChange:function(t){return e.setState({courseCode:t.target.value})},placeholder:"ex. 101, 300, etc.",required:!0}),r.a.createElement(j.Button,{variant:"raised"},"Submit")))}}]),a}(r.a.Component);var P=function(){return r.a.createElement(c.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{exact:!0,path:"/",component:O}),r.a.createElement(i.a,{path:"/upload",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.a5ad543a.chunk.js.map