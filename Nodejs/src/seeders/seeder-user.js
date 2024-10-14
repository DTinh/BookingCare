'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('allcodes', [{
      // email: 'duytinh@gmail.com',
      // password: '123456', //plain text,  hash password
      // firstName: 'DTinh',
      // lastName: 'Mr Tran',
      // address: 'USA',
      // gender: '1',
      // typeRole: 'ROLE',
      // keyRole: 'R1',
      key: 'R1',
      type: 'ROLL',
      valueEn: 'Admin',
      valueVi: 'Quản trị viên',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
