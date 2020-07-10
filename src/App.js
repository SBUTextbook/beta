import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
import TextbookList from './components/TextbookList';
import TextbookUploadForm from './components/TextbookUploadForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={TextbookList} />
          <Route path="/upload" component={TextbookUploadForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
