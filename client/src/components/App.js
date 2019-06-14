import React from 'react';
import {Switch , Route} from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import Home from '../components/home';
import Post from '../containers/addPost';
import history from '../actions/history';
import Article from '../containers/article';
import Edit from '../containers/editPost';
const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/post" component={Post}/>
      <Route path="/article/:id/edit" component={Edit}/>
      <Route path="/article/:id" component={Article}/>
    </Switch>
  </ConnectedRouter>
)

export default App;