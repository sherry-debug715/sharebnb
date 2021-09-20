'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Spots', [
      {
        userId: 1,
        city: 'Milersburg',
        state: 'Ohio',
        name: 'Charming Treehouse Getaway with Treetop Views',
        price: 260,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        city: 'Hampton',
        state: 'New Hampshire',
        name: 'OC Suites Hampton, NH',
        price: 178,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        city: 'San Diego',
        state: 'California',
        name: 'Parkview One Bedroom',
        price: 142,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        city: 'Ottsville',
        state: 'Pennsylvania',
        name: 'The Roost, Strawbale Construction',
        price: 125,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        city: 'Andover',
        state: 'New Jersey',
        name: 'Little Red Cabin',
        price: 66,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        city: 'Putney',
        state: 'Vermont',
        name: 'PET FRIENDLY, PRIVATE & PEACEFUL',
        price: 123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Spots', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
