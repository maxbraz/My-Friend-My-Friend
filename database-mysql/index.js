const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myFriend'
});

// SETUP TO USE MYSQL ON DEPLOYMENT
// 'mysql://bc321ec3408dd9:a8a236a1@us-cdbr-iron-east-03.cleardb.net/heroku_7617e6dc46c4343?reconnect=true'

// const connection = mysql.createConnection({
//   host: 'us-cdbr-iron-east-03.cleardb.net',
//   user: 'bc321ec3408dd9',
//   password: 'a8a236a1',
//   database: 'heroku_7617e6dc46c4343'
// });

const selectAll = (callback) => {
  connection.query('SELECT * FROM conversations', function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const addToconversations = (items, callback) => {
  let sql = 'INSERT INTO conversations (input, response, cs, conversationId) values (?, ?, ?, ?)';

  connection.query(sql, items, (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.addToconversations = addToconversations;
