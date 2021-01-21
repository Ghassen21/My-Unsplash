
// to set conection databse//
const { Sequelize } = require('sequelize');
const db = new Sequelize('MyUnsplashDB', 'root', 'root', {
    host: 'localhost',
    dialect:  'mysql' ,
  });
  module.exports.db=db