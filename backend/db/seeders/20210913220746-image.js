'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Images', [
      {
      spotId: 1, 
      url1: 'https://a0.muscache.com/im/pictures/miso/Hosting-49786285/original/49917cc0-336a-478c-9b3b-06f498c702a8.jpeg?aki_policy=xx_large',
      url2: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49786285/original/19b0b036-399a-4111-a3f8-35d0f798a25d.jpeg?aki_policy=x_large',
      url3: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49786285/original/07604c51-b6ca-4455-9809-1cf094924e19.jpeg?aki_policy=x_large',
      url4: 'https://a0.muscache.com/im/pictures/miso/Hosting-49786285/original/be30d820-f8b2-46c7-b0d6-f2d8d342b94a.jpeg?aki_policy=x_large',
      url5: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49786285/original/9e8d4c21-1452-4cb9-99e2-e53a5fcb89aa.jpeg?aki_policy=x_large',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      spotId: 2,
      url1: 'https://a0.muscache.com/im/pictures/a1a38c4c-ace8-4cad-a21d-d92dd0d8bcf6.jpg?im_w=960',
      url2: 'https://a0.muscache.com/im/pictures/947e2375-a80b-48a1-ab78-4e10780e7f08.jpg?im_w=1200',
      url3: 'https://a0.muscache.com/im/pictures/047ea21e-08c3-4ac2-91d0-694d7ed63de5.jpg?im_w=1200',
      url4: 'https://a0.muscache.com/im/pictures/d3de2e39-fa4c-44a6-9cab-73abed7b6330.jpg?im_w=1200',
      url5: 'https://a0.muscache.com/im/pictures/4f49ff93-2110-496a-b6c2-f43a71d82688.jpg?im_w=1200',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      spotId: 3,
      url1: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-33878037-unapproved/original/66b12555-3f5c-4f08-bb89-39f8cf8c5eeb.JPEG?aki_policy=xx_large',
      url2: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-33878037-unapproved/original/28f83061-c0ad-42a4-bc8b-23c00f9068b0.JPEG?aki_policy=x_large',
      url3: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-33878037-unapproved/original/73ea9c6e-c2dd-457c-94a4-40a72a05af90.JPEG?aki_policy=x_large',
      url4: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-33878037-unapproved/original/9a5679af-e391-4313-83e3-a81a43aa1d09.JPEG?aki_policy=x_large',
      url5: 'https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-33878037-unapproved/original/f068769b-1284-4efd-a4ea-6fce47dd7087.JPEG?aki_policy=x_large',
      createdAt: new Date(),
      updatedAt: new Date()
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Images', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
