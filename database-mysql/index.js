const mysql = require('mysql');


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'myFriend'
// });

// SETUP TO USE MYSQL ON DEPLOYMENT
// 'mysql://b1a9ac3054e662:6154344d@us-cdbr-iron-east-03.cleardb.net/heroku_3be701f842291a0?reconnect=true'

const connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-03.cleardb.net',
  user: 'b1a9ac3054e662',
  password: '6154344d',
  database: 'heroku_3be701f842291a0'
});

const selectAll = (callback) => {
  connection.query('SELECT * FROM conversations order by dateCreated desc LIMIT 10', function(err, results, fields) {
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
