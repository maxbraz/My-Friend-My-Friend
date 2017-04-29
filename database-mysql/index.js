const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'max',
  database: 'myFriend'
});

const selectAll = function(callback) {
  connection.query('SELECT * FROM conversations', function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const addToconversations = (items, callback) => {
  let sql = 'INSERT INTO conversations (input, output, cs, conversationId) values ?';
  conection.query(sql, items, (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.addToconversations = addToconversations;
