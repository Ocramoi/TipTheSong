const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  "type": "mongodb",
  "url": process.env.CLUSTER_URL,
  "entities": ["./entities/*.js"],
  "logging": true,
  "synchronize": true,
  "useNewUrlParser": true
}
