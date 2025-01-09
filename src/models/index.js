'use strict';
// dùng thư viện này thì mới chạy được process.env.NODE_ENV
require('dotenv').config();
// file fs để đọc, ko cần cài đặt
const fs = require('fs');
//path đường dẫn đến file, ko cần cài đặt
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
//môi trường là development, khi đó sẽ chạy vào config.json -> bê development thay vào [development]
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

//16->21 là kiểu kết nối với DB
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//24->43 nạp tất cả module mà mình khai báo
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// sử dụng key db thay cho 
module.exports = db;
