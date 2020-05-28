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
        BioId: 2,
      },
      {
        //jackie
        "title": "Monopoly",
        BioId: 2,
      },
      {
        //jackie
        "title": "Clue",
        BioId: 2,
      },
      {
        //kayla
        "title": "Portal Town",
        BioId: 4,
      },
      {
        //kayla
        "title": "Ticket to Ride",
        BioId: 4,
      },
      {
        //kayla
        "title": "Blurt",
        BioId: 4,
      },
      {
        //kamyla
        "title": "Game of Things",
        BioId: 3,
      },
      {
        //kamyla
        "title": "Quelf",
        BioId: 3,
      },
      {
        //kamyla
        "title": "Pandemic",
        BioId: 3,
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
