DROP DATABASE IF EXISTS myFriend;

CREATE DATABASE myFriend;

USE myFriend;

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
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
