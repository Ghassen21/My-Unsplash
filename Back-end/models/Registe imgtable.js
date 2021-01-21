
//to set our table
const Sequelize = require('sequelize');
const { db } = require('../database-mysql/indexdb');

const MyUnsplashDB_Image_table_register = db.define('MyUnsplashDB_Image_table_register', {
  label: {
    type: Sequelize.STRING
  },
  ImageUrl: {
    type: Sequelize.STRING
  },

});

MyUnsplashDB_Image_table_register.sync().then(() => {
  console.log('MyUnsplashDB_Image_table_register created');
});
module.exports = MyUnsplashDB_Image_table_register;