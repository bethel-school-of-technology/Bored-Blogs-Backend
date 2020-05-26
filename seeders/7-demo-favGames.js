'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
    return queryInterface.bulkInsert('FavoriteGames', [
      {
        //jacob
        "title": "Space invader",
        BioId: 1,
      },
      {
        //jacob
        "title": "Space invader2",
        BioId: 1,
      },
      {
        //jacob
        "title": "Space invader",
        BioId: 2,
      },
      {
        //jackie
        "title": "Space invader2",
        BioId: 2,
      },
      {
        //jacob
        "title": "Space invader",
        BioId: 3,
      },
      {
        //jacob
        "title": "Space invader2",
        BioId: 3,
      },
      {
        //jacob
        "title": "Space invader",
        BioId: 4,
      },
      {
        //jacob
        "title": "Space invader2",
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
      return queryInterface.bulkDelete('FavoriteGames', null, {});
    }
  }
};
