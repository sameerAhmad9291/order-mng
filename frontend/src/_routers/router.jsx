
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from '../LoginPage';
import { OrderListPage } from '../OrderListPage';
import { OrderDetailPage } from '../OrderDetailPage';
import { history } from '../_helpers';

function AppRouter() {
    return <Router history={history}>
        <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact key="add" path="/orders" component={OrderListPage} />
            <PrivateRoute exact key="edit" path="/orders/:id" component={OrderDetailPage} />
            <Redirect from="*" to="/login" />
        </Switch>
    </Router>
};

export { AppRouter };