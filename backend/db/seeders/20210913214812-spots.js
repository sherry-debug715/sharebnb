'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Spot', [
      {
        userId: 1,
        city: 'Milersburg',
        state: 'Ohio',
        name: 'Charming Treehouse Getaway with Treetop Views',
        price: 260
      },
      {
        userId: 2,
        city: 'Hampton',
        state: 'New Hampshire',
        name: 'OC Suites Hampton, NH',
        price: 178
      },
      {
        userId: 3,
        city: 'San Diego',
        state: 'California',
        name: 'Parkview One Bedroom',
        price: 142
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Spot', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
