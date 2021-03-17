import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firestore';
import FIREBASE_CONFIG from '../firebaseConfig.js';
firebase.initializeApp(FIREBASE_CONFIG);

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { OrderListPage } from '../OrderListPage';
import { LoginPage } from '../LoginPage';
import { OrderDetailPage } from '../OrderDetailPage';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="jumbotron" style={{backgroundColor: "white"}}>
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={LoginPage} />
                            <PrivateRoute path="/orders/:id" component={OrderDetailPage} />
                            <PrivateRoute path="/orders" component={OrderListPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export { App };