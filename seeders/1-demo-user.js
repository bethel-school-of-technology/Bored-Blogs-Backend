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
        id: 0,
        email: "penny@dollar.com",   
        password: "123456",
        firstName: "Penny",
        lastName: "Coin",
        bio: "I love games and learning new games online. There is such a fun online gaming community, even for board games", 
        lastLoggedIn: "05/12/20",
        createdAt: "02/02/19",
        token: "test",
        isAdmin: false
      },
      {
        id: 1,
        email: "springer123@show.com",
        password: "123456",
        firstName: "Jerry",
        lastName: "Springer",
        bio: "I love to make game shows on TV out of peoples lives.",
        lastLoggedIn: "02/12/20",
        createdAt: "04/30/19",
        token: "test",
        isAdmin: false
    },
    {
        id: 2,
        email: "kblack_67@email.com",
        password: "123456",
        firstName: "Karen",
        lastName: "Black",
        bio: "test test test bio for Karen Black",
        lastLoggedIn: "05/18/20",
        createdAt: "04/01/19",
        token: "test",
        isAdmin: false
        }
    ], 
    
    );
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
