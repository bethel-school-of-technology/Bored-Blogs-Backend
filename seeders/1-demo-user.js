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
        email: "jacob@gmail.com",
        password: authService.hashPassword("password"),
        firstName: "Jacob",
        lastName: "Stanton",
        bio: "i like programming",
        isAdmin: '1'
        //lastLoggedIn: new Date("05/12/20").toString(),
      },
      {
        email: "penny@dollar.com",
        password: authService.hashPassword("123456"),
        firstName: "Penny",
        lastName: "Coin",
        bio: "I love games and learning new games online. There is such a fun online gaming community, even for board games",
        isAdmin: '0'
        //lastLoggedIn: new Date("05/12/20").toString(),
      },
      {
        email: "springer123@show.com",
        password: authService.hashPassword("123456"),
        firstName: "Jerry",
        lastName: "Springer",
        bio: "I love to make game shows on TV out of peoples lives.",
        isAdmin: '0'
        //lastLoggedIn: "02/12/20",
        //createdAt: "04/30/19",
      },
      {
        email: "kblack_67@email.com",
        password: authService.hashPassword("123456"),
        firstName: "Karen",
        lastName: "Black",
        bio: "test test test bio for Karen Black",
        isAdmin: '0'
        //lastLoggedIn: "05/18/20",
        //createdAt: "04/01/19",
      },
      {
        email: "kblack_68@email.com",
        password: authService.hashPassword("123456"),
        firstName: "Karen",
        lastName: "Black",
        bio: "test test test bio for Karen Black",
        isAdmin: '0'
        //lastLoggedIn: "05/18/20",
        //createdAt: "04/01/19",
      },
      {
        email: "kayla@email.com",
        password: authService.hashPassword("123456"),
        firstName: "Kayla",
        lastName: "Miller",
        bio: "I love pandas and programming!",
        isAdmin: '1'
        //lastLoggedIn: "05/18/20",
        //createdAt: "04/01/19",
      },
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
