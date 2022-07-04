import express, { Express } from 'express';
import dotenv from 'dotenv';
import * as bodyparser from 'body-parser';
import mongoose from 'mongoose';
import { logger } from './logger';

import router from './routes';

dotenv.config();

const CLUSTER_URL: string = process.env.CLUSTER_URL ?? '';
const PORT: string = process.env.APP_PORT ?? '';

const app: Express = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(router);

logger.info("Creation DB connection...");
mongoose.connect(CLUSTER_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});