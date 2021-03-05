import { config } from 'dotenv';
config(); // dotenv config

import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json';

const port = process.env.SERVER_PORT || 8080;

admin.initializeApp({
    credential: admin.credential.cert({
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
        projectId: serviceAccount.project_id,
    }),
    databaseURL: process.env.DATABASE_URL
});

import app from './app';
app.listen(port, (): void => {
    console.log(`server is listening on ${port}`);
});
