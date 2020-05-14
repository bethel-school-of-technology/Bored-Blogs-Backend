'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.     

    */
    return queryInterface.bulkInsert('Comments', [
      {
        body: 'comment 1',
        parentPostId: 1,
        authorId: 1
      },
      {
        body: 'my body2',
        parentPostId: 1,
        CommentId: 1,
        authorId: 1
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
      return queryInterface.bulkDelete('Comments', null, {});
    }
  }
};
