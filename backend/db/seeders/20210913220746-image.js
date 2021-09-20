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
      },
      {
      spotId: 4,
      url1: 'https://a0.muscache.com/im/pictures/addb1758-9856-4f7c-a5ad-8cfa6c6611d6.jpg?im_w=960',
      url2: 'https://a0.muscache.com/im/pictures/cb36b11d-a819-41d6-8ee9-37e24278a367.jpg?im_w=1200',
      url3: 'https://a0.muscache.com/im/pictures/c5ac771b-580b-4d61-968a-52ff86a6e911.jpg?im_w=1200',
      url4: 'https://a0.muscache.com/im/pictures/036b76dc-c36b-4b28-ab4a-1c8a49940514.jpg?im_w=1200',
      url5: 'https://a0.muscache.com/im/pictures/5b5c4c65-e87f-439c-92fe-1843a5b7b28c.jpg?im_w=1200',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      spotId: 5,
      url1: 'https://a0.muscache.com/im/pictures/6d97c79a-13d9-4ef8-84dc-5a92ccd6261b.jpg?im_w=960',
      url2: 'https://a0.muscache.com/im/pictures/cabf5b73-6d13-4564-9412-8d60609c0acc.jpg?im_w=1200',
      url3: 'https://a0.muscache.com/im/pictures/27226e5c-526b-4315-bba3-1a0cacfba7ed.jpg?im_w=1200',
      url4: 'https://a0.muscache.com/im/pictures/f313e040-6768-470e-8234-216978c7c4d9.jpg?im_w=1200',
      url5: 'https://a0.muscache.com/im/pictures/3911e9d7-784b-416e-8e25-bbebd08f9f78.jpg?im_w=1200',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      spotId: 6,
      url1: 'https://a0.muscache.com/im/pictures/c3bcec06-9c23-4af6-9770-3ad7c17f91d6.jpg?im_w=960',
      url2: 'https://a0.muscache.com/im/pictures/24466359/15642137_original.jpg?im_w=1200',
      url3: 'https://a0.muscache.com/im/pictures/13813138/c6da0b41_original.jpg?im_w=1200',
      url4: 'https://a0.muscache.com/im/pictures/6c7a5c6d-f7a3-4c04-be05-5b8e769f1bae.jpg?im_w=1200',
      url5: 'https://a0.muscache.com/im/pictures/cb7edce1-c553-4d11-854e-abf96f4d4ef5.jpg?im_w=1200',
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
      return queryInterface.bulkDelete('Images', null, { truncate: true, cascade: true, restartIdentity: true });
  }
};
