'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'dotlaptrinh@gmail.com',
      password: '123456',
      firstName: 'Luong',
      lastName: 'Chien',
      address: 'VN',
      phonenumber: '0123456789',
      gender: 1,
      image: 'Anh con meo',
      roleId: '3',
      positionId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
