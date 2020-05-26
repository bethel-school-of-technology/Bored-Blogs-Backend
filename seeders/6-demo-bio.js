'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.     

    */
    return queryInterface.bulkInsert('Bios', [
      {
        //jacob
        "body": "I don't like the sound of roosters crowing at 4am. nor do i like sand",
        "other": "Greetings, I'm Jacob, and I live in Florida",
        userId: 1,
      },
      {
        //jackie
        "body": "I have angelic singing voice that rivals Jenn Johnson.",
        //fun fact
        "other": "Hi, I'm Jackie, and I live in Oklahoma",
        userId: 8,
      },
      {
        //kam
        "body": "I like running around Kroger in my spare time.",
        "other": "Hey there, I'm Kayla, and I live in Georgia.",
        userId: 7,
      },
      {
        //kayla
        "body": "Hawaii has my heart but Kentucky has my stomach.",
        "other": "Aloha, I'm Kamyla and I live in Hawaii.",
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
      return queryInterface.bulkDelete('Bios', null, {});
    }
  }
};
