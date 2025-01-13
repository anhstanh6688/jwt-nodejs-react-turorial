'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.hasMany(models.User);
      Group.belongsToMany(models.Role, { through: 'Group_Role' });
    }
  };
  //object relatioal mapping
  // hàm này là kiểu dữ liệu của các trường luôn 
  // đặc biệt ko cần khai báo trường id, sẽ tự sinh
  Group.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};