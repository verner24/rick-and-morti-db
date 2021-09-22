const { TABLE_NAME, PAGES } = require('./const');
const { getCharacters } = require('./api');
const { client } = require('./db');
client.connect();

const createTableText = `CREATE TABLE ${TABLE_NAME}(
  id serial,
  name text NOT NULL,
  data jsonb NOT NULL,
  PRIMARY KEY (id)
);`;

(async () => {
  console.log('begin script');

  try {
    await client.query(createTableText);
  } catch (err) {
    console.log(err.stack)
  }

  for (let i = 1; i <= PAGES; i++) {
    const { data: { results }} = await getCharacters(i);

    for (const result of results) {
      const insertText = `INSERT INTO ${TABLE_NAME}(name, data) VALUES($1, $2) RETURNING *`;
      const values = [result.name, result];

      try {
        await client.query(insertText, values);
      } catch (err) {
        console.log(err.stack)
      }
    }
  }

  console.log('end script');
})();
