const TABLE_NAME = 'alena_mihno';
const PAGES = 34;
const insertText = `INSERT INTO ${TABLE_NAME}(name, data) VALUES($1, $2) RETURNING *`;

module.exports = {
  TABLE_NAME,
  PAGES,
  insertText
};