'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.     

    */
    return queryInterface.bulkInsert('ContactUs', [
      {
        subject:'Message Test 1',
        body: 'message test 1 for post 1 - authorId=5',
        authorId: 5
      },
      {
        subject: 'Message Test 2',
        body: 'message test 2 for post 2 - authorId=3',
        authorId: 3
      },
    ],
      {

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
      return queryInterface.bulkDelete('Comments', null, {});
    }
  }
};
