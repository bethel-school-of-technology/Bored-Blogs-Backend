'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
    return queryInterface.bulkInsert('OtherWorks', [
      {
        //jacob github
        "link": "https://github.com/zed0x5f",
        BioId: 1,
      },
      {
        //jacob linkedin
        "link": "https://www.linkedin.com/in/jacob-stanton-10221972/",
        BioId: 1,
      },
      {
        //jackie github
        "link": "https://github.com/Jackie-Roberts",
        BioId: 8,
      },
      {
        //jackie linkedin - couldn't find her
        "link": "https://www.linkedin.com/feed/",
        BioId: 8,
      },
      {
        //kamyla github
        "link": "https://github.com/kamylaandrlik",
        BioId: 7,
      },
      {
        //kamyla linkedin
        "link": "https://www.linkedin.com/in/kamyla-andrlik-6811bb6b/",
        BioId: 7,
      },
      {
        //kayla github
        "link": "https://github.com/Kayla-D-Miller",
        BioId: 6,
      },
      {
        //kayla linkedin
        "link": "https://www.linkedin.com/in/kayla-miller-km/",
        BioId: 6,
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
      return queryInterface.bulkDelete('OtherWorks', null, {});
    }
  }
};
