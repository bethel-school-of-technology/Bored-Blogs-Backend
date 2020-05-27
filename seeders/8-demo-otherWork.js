'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
    return queryInterface.bulkInsert('OtherWorks', [
      {
        //jacob
        "link": "https://github.com/",
        BioId: 1,
      },
      {
        //jacob
        "link": "https://www.linkedin.com/",
        BioId: 1,
      },
      {
        //jacob
        "link": "https://www.liveabout.com/yoda-in-star-wars-2957947",
        BioId: 2,
      },
      {
        //jackie
        "link": "Space invader2",
        BioId: 2,
      },
      {
        //jackie
        "link": "Space invader",
        BioId: 3,
      },
      {
        //jackie
        "link": "Space invader2",
        BioId: 3,
      },
      {
        //kamyla
        "link": "Space invader",
        BioId: 4,
      },
      {
        //kamyla
        "link": "Space invader2",
        BioId: 4,
      },
      {
        //kamyla
        "link": "Space invader2",
        BioId: 4,
      },
      {
        //kayla
        "link": "Space invader2",
        BioId: 4,
      },
      {
        //kayla
        "link": "Space invader2",
        BioId: 4,
      },
      {
        //kayla
        "link": "Space invader2",
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
