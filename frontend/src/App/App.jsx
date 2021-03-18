import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firestore';
import FIREBASE_CONFIG from '../firebaseConfig.js';
firebase.initializeApp(FIREBASE_CONFIG);

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { AppRouter } from '../_routers/router';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="jumbotron" style={{ backgroundColor: "white" }}>
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <AppRouter />
                </div>
            </div>
        </div>
    );
}

export { App };