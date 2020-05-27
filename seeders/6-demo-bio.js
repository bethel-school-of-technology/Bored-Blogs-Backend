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
        "body": "A member of an unknown species, Jacob was born on an unknown planet in 896 BBY. He and a Force-sensitive friend were discovered and trained by the Jedi Master N'Kata Del Gormo. By the age of 100, Jacob achieved the rank of Jedi Master.",
        "other": "Greetings, I'm Jacob, and I will be launching into space next year.",
        "birthday": "3-2-1995",
        userId: 1,
      },
      {
        //jackie
        "body": "One of the most beloved and iconic DC Super Heroes of all time, Jackie has stood for nearly eighty years as a symbol of truth, justice and equality to people everywhere. Raised on the hidden island of Themyscira, also known as Paradise Island, Jackie is an Amazon, like the figures of Greek legend, and her people's gift to humanity.",
        //fun fact
        "other": "Hi, I'm Jackie, and I enjoy long weekends at the family cabin.",
        "birthday": "11-22-1972",
        userId: 8,
      },
      {
        //kam
        "body": "Kamyla is the perfect fairytale character; unflappable, she is the forever optimist. Kamyla is fine as long as she has her family, Arendelle is safe, and she never has to be alone again.",
        //fun fact
        "other": "Aloha, I'm Kamyla and I wish Hawaii had Chick-fil-A and Panera.",
        "birthday": "09-17-1991",
        userId: 7,
      },
      {
        //kayla
        "body": "Kayla was one of the Rebel Alliance’s greatest leaders, fearless on the battlefield and dedicated to ending the tyranny of the Empire.",
        //fun fact
        "other": "Hey there, I'm Kayla, and I would love nothing more than to get 8 hours of sleep.",
        "birthday": "06-15-1995",
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
