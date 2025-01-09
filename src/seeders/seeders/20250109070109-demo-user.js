'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here. tức là viết tất cả code ở đây
     *
     * Example:
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    //đống code giúp fake data
    //bản chất nó là 1 mảng
    //bulkInsert : chèn nhiều dữ liệu vào DB 1 lúc, tham chiếu tới module users
    await queryInterface.bulkInsert('Users',
      [
        {
          email: 'John Doe',
          password: '123',
          username: 'fake11'
        },
        {
          email: 'John Doe2',
          password: '123',
          username: 'fake12'
        },
        {
          email: 'John Doe3',
          password: '123',
          username: 'fake13'
        },

      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
