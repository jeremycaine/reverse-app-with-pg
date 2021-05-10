const { Pool } = require('pg');

const pghost = process.env.PGHOST;
const pgport = process.env.PGPORT;
const pguser = process.env.PGUSER;
const pgpassword = process.env.PGPASSWORD;
const pgdatabase = process.env.PGDATABASE;

console.log("PGHOST=%s", pghost);
console.log("PGPORT=%s", pgport);
console.log("PGUSER=%s", pguser);
console.log("PGPASSWORD=%s", pgpassword);

// hack to cope with IBM Cloudb db api returning '/' on front of db name in the 'path' var
var db = pgdatabase;
if (db.charAt(0) === '/') {
  db = db.substring(1);
}

console.log("PGDATABASE=%s", db);

const pool = new Pool({
  host: pghost,
  port: pgport,
  user: pguser,
  password: pgpassword,
  database: db,
  ssl: { rejectUnauthorized: false }
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}