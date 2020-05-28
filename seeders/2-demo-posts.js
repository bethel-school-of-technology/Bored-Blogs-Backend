'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
    return queryInterface.bulkInsert('Posts', [
      {
        authorId: 1,
        title: "Settlers of Catan",
        published: "2020-05-26 00:00:00",
        //preview:          "Test PREVIEW. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        body: "Picture yourself in the era of discoveries: after a long voyage of great deprivation, your ships have finally reached the coast of an uncharted island. Its name shall be Catan! But you are not the only discoverer. Other fearless seafarers have also landed on the shores of Catan: the race to settle the island has begun! The women and men of your expedition build the first two settlements. Fortunately, the yet uninhabited land is rich in natural resources. You build roads and new settlements that eventually become cities. Will you succeed in gaining supremacy on Catan? Barter trade dominates the scene. Some resources you have in abundance, other resources are scarce. Ore for wool, brick for lumber - you trade according to what is needed for your current building projects. Proceed strategically! If you found your settlements in the right places and skillfully trade your resources, then the odds will be in your favor. But your opponents are smart too.",
        //relatedGames: [],
        //tags: [],
      },
      {
        authorId: 6,
        title: "Ticket to Ride",
        published: "2020-02-04 00:00:00",
        //preview:          "PREVIEW. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        body: "With dozens of international awards and over 8 Million games sold, the Ticket to Ride series is one of the most popular modern board game series to date! Ticket to Ride is a cross-country train adventure where players collect cards of various types of train cars that enable them to claim railway routes connecting cities in various countries around the world. The original version of the game is played on a board depicting a railway map of the United States and southern Canada. Localized editions have subsequently been published depicting maps of other countries, cities and regions. Players collect and play train car cards to claim train routes across the map. Points are earned based on the length of the claimed routes, whoever completes the longest continuous railway, and whether the player can connect distant cities that are determined by drawing ticket cards.",
        //relatedGames: [],
        //tags: [],
      },
      {
        authorId: 7,
        title: "Dixit",
        published: "2020-03-24 00:00:00",
        //preview:          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        body: "Each player starts the game with six random cards. Players then take turns being the storyteller. The player whose turn it is to be storyteller looks at the six images in his or her hand. From one of these, he or she makes up a sentence or phrase that might describe it and says it out loud (without showing the card to the other players). Each other player then selects from among their own six cards the one that best matches the sentence given by the storyteller. Then, each player gives their selected card to the storyteller, without showing it to the others. The storyteller shuffles his or her chosen card with the cards received from the other players, and all cards are then dealt face up. The players (except for the storyteller) then secretly guess which picture was the storyteller's, using numbered voting chips.",
        //relatedGames: [],
        //tags: [],
      },
      {
        authorId: 8,
        title: "Jungle Speed",
        published: "2020-05-07 00:00:00",
        //preview:          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        body: "Cards are shuffled and dealt to each player face down, ensuring that all players have an equal number of cards in their stacks. A wooden (or rubber) cylinder called a Totem is placed in the center of the table, equidistant from all players. Any remaining cards that cannot be distributed equitably are placed under the totem in an area known as the Pot. Players take turns playing the top card from their stacks in a clockwise rotation. Each player does this by flipping their card over in the direction of their opponents, so that their opponents get the first glance at their card to avoid unfair advantage. The card is then quickly placed in front of the player's pile. Thus players form discard piles in front of their piles of cards as the game progresses. When a player plays a card that matches the symbol of another player's top card, the two players must duel to grab the totem in the center as quickly as possible. The loser of the duel takes both players' played cards (their discard pile plus the card currently in play), as well as any cards in the pot, and places them at the bottom of his deck. The loser of the round plays the next card.",
        //relatedGames: [],
        //tags: [],
      },
      {
        authorId: 1,
        title: "Spot It",
        published: "2020-04-16 00:00:00",
        //preview:          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        body: "If you have very young kids who can't recognize numerals or read instructions, then some of the games I recommend are just a little too advanced for your kids. But this week's recommendation is absolutely playable by a three-year-old, while still remaining fun for older kids. I liken it to an even more accessible version of SET. Big groups can play, the instructions are incredibly simple, and there are a ton of fun variations that you can try. The cool thing about Spot It! cards is that each pair of cards is guaranteed to have one shared image, and ONLY one shared image. Sounds crazy, right? How can there be a deck of cards where every card shares exactly one image with every single other card in the deck? Well, there's a pretty interesting mathematical explanation. Another variation that I invented works basically like SET. You place nine cards in a 3x3 grid in the center of the table. Then everyone looks for a set of three cards that all share the same image. If you spot a set, you keep those three cards. It's a bit more challenging than finding a single shared image, but still very accessible for young kids. My four-year-old was easily able to play this variation.",
        //relatedGames: [],
        //tags: [],
      },
      {
        authorId: 6,
        title: "Werewolf",
        published: "2020-02-11 00:00:00",
        //preview:          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
        body: "Werewolf can be played with 5 to 75 players of all ages. Each player has an agenda: as a villager, hunt down the werewolves; as a werewolf, convince the other villagers that you are innocent, while secretly attacking those same villagers each night. A third major team working to kill off all others are the Vampires, who must kill both werewolves and villagers to win, and other neutral roles are available, each vying to achieve their own goals. Dozens of special roles are available to help both the villagers and the werewolves achieve their goals.",
        //relatedGames: [],
        //tags: [],
      }
    ], {

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
      return queryInterface.bulkDelete('Posts', null, {});
    }
  }
};
