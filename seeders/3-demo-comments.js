'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.     

    */
    return queryInterface.bulkInsert('Comments', [
      {
        body: 'Settlers is one of my favorite games! Highly recommend it!',
        parentPostId: 1, // Settlers of Catan
        authorId: 7 // Kam
      },
      {
        body: 'I agree. Love playing Catan!',
        parentPostId: 1, // Settlers of Catan
        commentId: 1,
        authorId: 2 // Penny Coin
      },
      {
        body: 'More sheep for the sheep farm',
        parentPostId: 1, // Settlers of Catan
        commentId: 1,
        authorId: 2 // Penny Coin
      },
      {
        body: 'I 2 enjoy a good game of sheep hearding',
        parentPostId: 1, // Settlers of Catan
        commentId: 2,
        authorId: 2 // Penny Coin
      },
      {
        body: 'Playing Ticket to Ride on the ipad rocks. It is so much easier than the board game where all those little pieces get messed up whenever you bump the board! Lol',
        parentPostId: 2, // Ticket to Ride
        authorId: 3 // Jerry Springer
      },
      {
        body: 'I like playing on the ipad too, but sometimes it is more fun just to sit around the board and make those trains!',
        parentPostId: 2, // Ticket to Ride
        commentId: 5,
        authorId: 4 // Karen Black
      },
      {
        body: 'I have never really enjoyed Dixit but maybe I should give it another try.',
        parentPostId: 3, // Dixit
        authorId: 4 // Karen Black
      },
      {
        body: 'I have never heard of this game Jungle Speed but it sounds fun. I will have to check it out.',
        parentPostId: 4, //Jungle Speed
        authorId: 5 // Sue Ellen
      },
      {
        body: 'We play this game a lot and it is really fun. Your family will enjoy it!',
        parentPostId: 4, //Jungle Speed
        authorId: 3 // Jerry Springer
      },
      {
        body: 'Spot It is a fun family game. I recommend it!',
        parentPostId: 5,  //Spot It
        authorId: 2 // Penny Coinn
      }
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
