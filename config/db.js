const mysql = require("mysql2");

const connecion = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "abcdef",
  database: "tiendaOnline",
})

function query(sql, data) {
  return new Promise((resolve, reject) => {
    connection.query(sql, data, function (error, result, fields) {
      error ? reject(error.sqlMessage) : resolve(result);
    });
  });
}

module.exports = { query };