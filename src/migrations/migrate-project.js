'use strict';
module.exports = {
  //kiểu tạo table
  //hàm up có ý nghĩa khi muốn thao tác với db thì sẽ chạy vào up
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Project', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.STRING
      },
      customerId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Project');
  }
};