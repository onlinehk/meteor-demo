import React from 'react';
import { Router, Route, Switch } from 'react-router';
import {createBrowserHistory} from 'history';

// route components
import AppContainer from '../ui/App.jsx';
import AboutContainer from '../ui/About.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={AppContainer} />
            <Route exact path="/about" component={AboutContainer} />
            {/* <Route component={NotFoundPage} /> */}
        </Switch>
    </Router>
);