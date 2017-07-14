var express = require('express');
var bodyParser = require('body-parser');
var messages = require('../database-mysql');
var path = require('path');
var rp = require('request-promise');

var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/conversations', (req, res) => {
  messages.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/question', (req, res) => {
  let input = req.body.question;
  let uri = `https://www.cleverbot.com/getreply?key=CC1qn-UVTI4bWnIJL1ygTr820Kg&input=${input}&cs=MXYxCTh2MQlBdkFZRFdFQVA4RFEJMUZ2MTQ5MzQwNzQ1MAk2NGlHb29kLgk`;

  let options = {
    uri: uri,
    headers: {
      'User-Agent': 'maxbraz'
    },
    json: true
  };

  rp (options)
    .then((answer) => {
      messages.addToconversations([answer.input, answer.output, answer.cs, answer.conversation_id], (err, results) => {
        if (err) {
          res.sendStatus(500);
        } else {
          console.log('db insert successful: ', answer.output);
          res.send({answer: answer.output});
        }
      });
    })
    .catch((err) => {
      console.error(err);
    });
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
