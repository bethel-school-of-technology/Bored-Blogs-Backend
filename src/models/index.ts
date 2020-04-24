'use strict';

import fs = require('fs');
import path = require('path');
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const use_env_variable: any = process.env[config.use_env_variable];


let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(use_env_variable, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const db = {
  sequelize,
  Sequelize
};
fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: any) => {
    const model: Model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
