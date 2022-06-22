import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const dataSource = new DataSource({
  "type": "mongodb",
  "ssl": true,
  "url": process.env.CLUSTER_URL,
  "authSource": "admin",
  "entities": [__dirname + "/entities/*/*.*"],
  "logging": true,
  "synchronize": false,
  "useNewUrlParser": true
});
