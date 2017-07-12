DROP DATABASE IF EXISTS heroku_3be701f842291a0;

CREATE DATABASE heroku_3be701f842291a0;

USE heroku_3be701f842291a0;

CREATE TABLE conversations (
  id int NOT NULL AUTO_INCREMENT,
  input varchar(255) NOT NULL,
  response varchar(255) NOT NULL,
  cs varchar(400) NOT NULL,
  conversationId varchar(30) NOT NULL,
  dateCreated TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  pwd varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql --host=us-cdbr-iron-east-03.cleardb.net --user=bc321ec3408dd9 --password=a8a236a1 -
-reconnect heroku_3be701f842291a0 < schema.sql
 *  to create the database and the tables.*/
