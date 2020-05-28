'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
    return queryInterface.bulkInsert('Games', [
      {
        //jacob
        "title": "Space invader",
        BioId: 1,
      },
      {
        //jacob
        "title": "Skyrocket",
        BioId: 1,
      },
      {
        //jacob
        "title": "Shiptastic",
        BioId: 1,
      },
      {
        //jackie
        "title": "Scattergories",
        BioId: 8,
      },
      {
        //jackie
        "title": "Monopoly",
        BioId: 8,
      },
      {
        //jackie
        "title": "Clue",
        BioId: 8,
      },
      {
        //kayla
        "title": "Portal Town",
        BioId: 6,
      },
      {
        //kayla
        "title": "Blurt",
        BioId: 6,
      },
      {
        //kayla
        "title": "Blurt",
        BioId: 6,
      },
      {
        //kamyla
        "title": "Game of Things",
        BioId: 7,
      },
      {
        //kamyla
        "title": "Quelf",
        BioId: 7,
      },
      {
        //kamyla
        "title": "Pandemic",
        BioId: 7,
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
      return queryInterface.bulkDelete('Games', null, {});
    }
  }
};
