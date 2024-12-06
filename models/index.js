const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js');

const sequelize = new Sequelize(config.development);

const db = {
  sequelize,
  Sequelize,
  Style: require('./Style')(sequelize, DataTypes),
  Item: require('./Item')(sequelize, DataTypes),
};

module.exports = db;
