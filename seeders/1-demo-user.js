'use strict';
const authService = require('../services/auth'); //<--- Add authentication service
function styleFromColor(backGroundColor, textColor) {
  return {"background-color": backGroundColor,
    color: textColor,
  };
}
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
        bio: "I like programming",
        isAdmin: '1',
        style: styleFromColor("#006eff", "white"),
        url: 'https://ca.slack-edge.com/T9P33872P-UMB26EV6E-f1b15a101868-512'
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
        isAdmin: '1',
        style: styleFromColor("red", "white"),
        url: 'https://ca.slack-edge.com/T9P33872P-UKW98R0NL-9b2d325d0d90-512',
        //lastLoggedIn: "05/18/20",
        //createdAt: "04/01/19",
      },
      {
        email: "kam@email.com",
        password: authService.hashPassword("123456"),
        firstName: "Kamyla",
        lastName: "Andrlik",
        bio: "My heart is in Hawaii but my stomach is in Kentucky!",
        isAdmin: '1',
        style: styleFromColor("#30c230", "white"),
        url: 'https://ca.slack-edge.com/T9P33872P-UNCD1UH6K-6e8e43a4b2fd-512',
        //lastLoggedIn: "05/18/20",
        //createdAt: "04/01/19",
      },
      {
        email: "jackieroberts@email.com",
        password: authService.hashPassword("asdzxc"),
        firstName: "Jackie",
        lastName: "Roberts",
        bio: "I love Canada!",
        isAdmin: '1',
        style: styleFromColor("yellow", "black"),
        url: 'https://ca.slack-edge.com/T9P33872P-UMXPMHEAE-3b5c27f1c336-512'
        //lastLoggedIn: "05/18/20",
        //createdAt: "04/01/19",
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
