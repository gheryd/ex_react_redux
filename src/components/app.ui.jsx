import React from 'react';

import Content1 from './Content1';
import Content2 from './Content2';
import NotFound from './notFound.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

const AppUI = ({currentView }) => {

  return (
    <BrowserRouter>
    <div className="container">
      <Switch>    
        <Route exact path="/" component={Content1} />
        <Route path="/product/new" component={Content2} />
        <Route path="/product/edit/:id" component={Content2} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </BrowserRouter>
  );

}

export default AppUI;