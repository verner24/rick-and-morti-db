const { Client } = require('pg');
const fs = require('fs');

const config = {
  user: 'candidate',
  password: '62I8anq3cFq5GYh2u4Lh',
  port: 6432,
  database: 'db1',
  host: 'rc1c-2m0keqdcncuwizmx.mdb.yandexcloud.net',
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('./CA.pem').toString(),
  },
}

const client = new Client(config);

module.exports = {
  client,
};