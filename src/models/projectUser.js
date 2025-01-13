'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project_User extends Model {
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
  Project_User.init({
    projectId: DataTypes.INTEGER, //th này liên kết tới bảng group, và id ở migrations thì ở kiểu Interger
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project_User',
  });
  return Project_User;
};