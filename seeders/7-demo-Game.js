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
        bioId: "1",
      },
      {
        //jacob
        "title": "Skyrocket",
        bioId: 1,
      },
      {
        //jacob
        "title": "Shiptastic",
        bioId: 1,
      },
      {
        //jackie
        "title": "Scattergories",
        bioId: 2,
      },
      {
        //jackie
        "title": "Monopoly",
        bioId: 2,
      },
      {
        //jackie
        "title": "Clue",
        bioId: 2,
      },
      {
        //kayla
        "title": "Portal Town",
        bioId: 3,
      },
      {
        //kayla
        "title": "Blurt",
        bioId: 3,
      },
      {
        //kayla
        "title": "Dominos",
        BioId: 6,
      },
      {
        //kamyla
        "title": "Game of Things",
        bioId: 4,
      },
      {
        //kamyla
        "title": "Quelf",
        bioId: 4,
      },
      {
        //kamyla
        "title": "Pandemic",
        bioId: 4,
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
