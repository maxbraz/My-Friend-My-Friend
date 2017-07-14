const mysql = require('mysql');


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'myFriend'
// });

// SETUP TO USE MYSQL ON DEPLOYMENT
// 'mysql://b1a9ac3054e662:6154344d@us-cdbr-iron-east-03.cleardb.net/heroku_3be701f842291a0?reconnect=true'
const dbConfig = {
  host: 'us-cdbr-iron-east-03.cleardb.net',
  user: 'b1a9ac3054e662',
  password: '6154344d',
  database: 'heroku_3be701f842291a0'
};

let connection;

const handleDisconnect = () => {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.log('error when connecting to db: ', err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on('error', (err) => {
    console.log('db error: ', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
};

handleDisconnect();

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
