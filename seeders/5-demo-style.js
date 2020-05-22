'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.     

    */
    return queryInterface.bulkInsert('Style', [
      {
        subject: 'saerdhkjbcvjkahsebcjhkgasebcjkaghwebc',
        body: 'comment test 1 for post 1',
        authorId: 2
      },
      {
        subject: 'subject',
        body: 'comment body2 for post 1',
        authorId: 1
      },
      {
        subject: 'Message Test 1',
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
      return queryInterface.bulkDelete('Style', null, {});
    }
  }
};
