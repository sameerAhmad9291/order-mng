import { config } from 'dotenv';
config(); // dotenv config

import app from './app';
const port = process.env.SERVER_PORT || 8080;

app.listen(port, (): void => {
    console.log(`server is listening on ${port}`);
});