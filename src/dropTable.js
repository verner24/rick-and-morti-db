const { TABLE_NAME } = require('./const');
const { client } = require('./db');
client.connect();

const dropTableText = `DROP TABLE ${TABLE_NAME}`;

(async () => {

  try {
    await client.query(dropTableText);
  } catch (err) {
    console.log(err.stack)
  }
})();