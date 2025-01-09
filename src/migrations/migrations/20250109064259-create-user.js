'use strict';
module.exports = {
  //kiểu tạo table
  //hàm up có ý nghĩa khi muốn thao tác với db thì sẽ chạy vào up
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //kiểu xóa table
  //khi muốn quay lại, back lại thì sd down
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};