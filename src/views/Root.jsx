import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/twitters" component={Twitters} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
