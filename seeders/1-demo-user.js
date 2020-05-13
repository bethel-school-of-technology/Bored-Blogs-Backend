'use strict';
const authService = require('../services/auth'); //<--- Add authentication service

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.     

    */
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'admin1',
        lastName: 'Doe',
        isAdmin: true,
        email: 'admin@doe.com',
        bio: 'i like turts',
        password: authService.hashPassword('password')
      },
      {
        firstName: 'admin2',
        lastName: 'Doe',
        isAdmin: true,
        email: 'admin2@doe.com',
        bio: 'i like turts',
        password: authService.hashPassword('password')
      }
    ], {

    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  }
};
