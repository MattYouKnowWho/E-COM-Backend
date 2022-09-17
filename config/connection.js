

require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  // : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    : new Sequelize('ecommerce_db','root', 'root', {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    },
    });

module.exports = sequelize;
