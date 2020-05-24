'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.     

    */
    return queryInterface.bulkInsert('Styles', [
      {
        "background-color": "#006eff",
        "color": "white",
        userId: 1,
      },
      {
        "background-color": "yellow",
        "color": "black",
        userId: 8,
      },
      {
        "background-color": "#30C230",
        "color": "white",
        userId: 7,
      },
      {
        "background-color": "red",
        "color": "white",
        userId: 6,
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
      return queryInterface.bulkDelete('Styles', null, {});
    }
  }
};
