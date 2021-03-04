import { config } from 'dotenv';
config(); // dotenv config

import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json';

import app from './app';
const port = process.env.SERVER_PORT || 8080;

app.listen(port, (): void => {
    console.log(`server is listening on ${port}`);
});

admin.initializeApp({
    credential: admin.credential.cert({
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
        projectId: serviceAccount.project_id,
    }),
    databaseURL: process.env.DATABASE_URL
});