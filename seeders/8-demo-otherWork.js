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
        "link": "https://www.linkedin.com/in/jacob-stanton-10221932/",
        BioId: 1,
      },
      {
        //jackie github
        "link": "https://github.com/Jackie-Roberts",
        BioId: 2,
      },
      {
        //jackie linkedin - couldn't find her
        "link": "https://www.linkedin.com/feed/",
        BioId: 2,
      },
      {
        //kamyla github
        "link": "https://github.com/kamylaandrlik",
        BioId: 3,
      },
      {
        //kamyla linkedin
        "link": "https://www.linkedin.com/in/kamyla-andrlik-4211bb4b/",
        BioId: 3,
      },
      {
        //kayla github
        "link": "https://github.com/Kayla-D-Miller",
        BioId: 4,
      },
      {
        //kayla linkedin
        "link": "https://www.linkedin.com/in/kayla-miller-km/",
        BioId: 4,
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
