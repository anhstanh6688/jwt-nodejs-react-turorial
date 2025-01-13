'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group_Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  //object relatioal mapping
  // hàm này là kiểu dữ liệu của các trường luôn 
  // đặc biệt ko cần khai báo trường id, sẽ tự sinh
  Group_Role.init({
    groupId: DataTypes.INTEGER, //th này liên kết tới bảng group, và id ở migrations thì ở kiểu Interger
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Group_Role',
  });
  return Group_Role;
};