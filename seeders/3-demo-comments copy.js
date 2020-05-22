'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.     

    */
    return queryInterface.bulkInsert('Comments', [
      {
        body: 'comment test 1 for post 1',
        parentPostId: 1,
        authorId: 1
      },
      {
        body: 'comment body2 for post 1',
        parentPostId: 1,
        CommentId: 1,
        authorId: 2
      },
      {
        body: 'comment body2 for post 2',
        parentPostId: 2,
        CommentId: null,
        authorId: 2
      },
      {
        body: 'comment test for post 2',
        parentPostId: 2,
        CommentId: 1,
        authorId: 4
      },
      {
        body: 'comment test for post 4',
        parentPostId: 4,
        CommentId: 1,
        authorId: 3
      },
      {
        body: 'comment test for post 4',
        parentPostId: 4,
        CommentId: null,
        authorId: 3
      },
      {
        body: 'comment test for post 5',
        parentPostId: 5,
        CommentId: 1,
        authorId: 2
      },
      //     id: 25,
      //     user: "Peppy Longstocking",
      //     body: "test comment 123 hardcoded in post-comment service",
      //     createdAt: "05/19/2020",
      //     parentPostId: 1,
      //     CommentId: 1,
      //     authorId: 7
      // },
      // {
      //     id: 26,
      //     user: "Bob Jones",
      //     body: "comment 2 hardcoded in post-comment service",
      //     createdAt: "03/02/2020",
      //     parentPostId: 2,
      //     CommentId: 1,
      //     authorId: 1
      //   },
      //   {
      //     id: 26,
      //     user: "Bob Jones",
      //     body: "comment 3 hardcoded in post-comment service",
      //     createdAt: "01/28/2020",
      //     parentPostId: 3,
      //     CommentId: 3,
      //     authorId: 1
      //     },
      //     {
      //       id: 26,
      //       user: "Bob Jones",
      //       body: "comment 4 hardcoded in post-comment service",
      //       createdAt: "05/10/2020",
      //       parentPostId: 4,
      //       CommentId: 2,
      //       authorId: 1
      //       }
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
