'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotId: {
        type: Sequelize.INTEGER
      },
      url1: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      url2: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      url3: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      url4: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      url5: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Images');
  }
};
