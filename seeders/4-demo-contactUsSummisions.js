'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.     

    */
    return queryInterface.bulkInsert('ContactUs', [
      {
        subject: 'Chess',
        body: 'I would like to learn more about Chess strategies',
        authorId: 2
      },
      {
        subject: 'Electronic Games',
        body: 'Will you post something about the old atari games please?',
        authorId: 5
      },
      {
        subject: 'Group Games',
        body: 'What are your suggestions on games for large groups of people.',
        authorId: 3
      },
      {
        subject: 'Scattagories',
        body: 'Please blog about the scattagories game',
        authorId: 4
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
      return queryInterface.bulkDelete('ContactUs', null, {});
    }
  }
};
