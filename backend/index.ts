import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as bodyparser from 'body-parser';
import { dataSource } from './dataSource';
import { logger } from './logger';

import router from './routes';
import { exit } from 'process';

dotenv.config();

const app: Express = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use(router);

logger.info("Creation DB connection...");
dataSource
  .initialize()
  .then(async () => {
    app.listen(process.env.APP_PORT, () => {
      logger.info(`Server running at :${process.env.APP_PORT}`);
    });
  })
  .catch(err => {
    logger.error(err)
    exit(1);
  });
