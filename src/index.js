import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './container/Home';
import Release from './container/Release';
import Sprint from './container/Sprint';
import Backlog from './container/Backlog';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/releases' component={Release} />
            <Route path='/sprints' component={Sprint} />
            <Route path='/backlogs' component={Backlog} />
        </Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
