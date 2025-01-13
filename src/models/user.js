'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here định nghĩa mqh ở đây
      //định nghĩa mối quan hệ 11 giữa User và Group
      User.belongsTo(models.Group);
      User.belongsToMany(models.Project, { through: 'Project_User' });
    }
  };
  //object relatioal mapping
  // hàm này là kiểu dữ liệu của các trường luôn 
  // đặc biệt ko cần khai báo trường id, sẽ tự sinh
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    address: DataTypes.STRING,
    sex: DataTypes.STRING,
    phone: DataTypes.STRING, //ko nên để number
    groupId: DataTypes.INTEGER //th này liên kết tới bảng group, và id ở migrations thì ở kiểu Interger
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};