import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { HashRouter, Route, Link } from "react-router-dom";
import TextbookList from './components/TextbookList';
import TextbookUploadForm from './components/TextbookUploadForm';

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className="App">
        <Route exact path="/" component={TextbookList} />
        <Route path="/upload" component={TextbookUploadForm} />
      </div>
    </BrowserRouter>
  );
}

export default App;
