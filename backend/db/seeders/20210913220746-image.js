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
      url1: 'https://www.airbnb.com/rooms/49786285?category_tag=Tag%3A8188&adults=1&children=0&infants=0&check_in=2022-01-28&check_out=2022-02-04&previous_page_section_name=1000&federated_search_id=f93f46ee-c5af-4f3e-ab4f-86391ab3fb5f',
      url2: 'https://www.airbnb.com/rooms/49786285/photos?category_tag=Tag%3A8188&adults=1&children=0&infants=0&check_in=2022-01-28&check_out=2022-02-04&federated_search_id=f93f46ee-c5af-4f3e-ab4f-86391ab3fb5f&source_impression_id=p3_1631573134_uXxdVx8oyXcBm630&heroPhotoId=1178814164',
      url3: 'https://www.airbnb.com/rooms/49786285/photos?category_tag=Tag%3A8188&adults=1&children=0&infants=0&check_in=2022-01-28&check_out=2022-02-04&federated_search_id=f93f46ee-c5af-4f3e-ab4f-86391ab3fb5f&source_impression_id=p3_1631573134_uXxdVx8oyXcBm630&heroPhotoId=1178814149',
      url4: 'https://www.airbnb.com/rooms/49786285/photos?category_tag=Tag%3A8188&adults=1&children=0&infants=0&check_in=2022-01-28&check_out=2022-02-04&federated_search_id=f93f46ee-c5af-4f3e-ab4f-86391ab3fb5f&source_impression_id=p3_1631573134_uXxdVx8oyXcBm630&heroPhotoId=1240380351',
      url5: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49786285/original/9e8d4c21-1452-4cb9-99e2-e53a5fcb89aa.jpeg?im_w=1200',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      spotId: 2,
      url1: 'https://www.airbnb.com/rooms/49051736/photos?category_tag=Tag%3A789&adults=1&check_in=2022-02-26&check_out=2022-03-05&federated_search_id=b14b8f3c-3f4a-442d-bf36-330721902c09&source_impression_id=p3_1631573299_%2BoQBG54rDFP%2Bm%2B4A&guests=1&heroPhotoId=1158185995',
      url2: 'https://www.airbnb.com/rooms/49051736/photos?category_tag=Tag%3A789&adults=1&check_in=2022-02-26&check_out=2022-03-05&federated_search_id=b14b8f3c-3f4a-442d-bf36-330721902c09&source_impression_id=p3_1631573299_%2BoQBG54rDFP%2Bm%2B4A&guests=1&heroPhotoId=1167642345',
      url3: 'https://www.airbnb.com/rooms/49051736/photos?category_tag=Tag%3A789&adults=1&check_in=2022-02-26&check_out=2022-03-05&federated_search_id=b14b8f3c-3f4a-442d-bf36-330721902c09&source_impression_id=p3_1631573299_%2BoQBG54rDFP%2Bm%2B4A&guests=1&heroPhotoId=1171389337',
      url4: 'https://www.airbnb.com/rooms/49051736/photos/1167214158?category_tag=Tag%3A789&adults=1&check_in=2022-02-26&check_out=2022-03-05&federated_search_id=b14b8f3c-3f4a-442d-bf36-330721902c09&source_impression_id=p3_1631573299_%2BoQBG54rDFP%2Bm%2B4A&guests=1',
      url5: 'https://www.airbnb.com/rooms/49051736/photos/1167642494?category_tag=Tag%3A789&adults=1&check_in=2022-02-26&check_out=2022-03-05&federated_search_id=b14b8f3c-3f4a-442d-bf36-330721902c09&source_impression_id=p3_1631573299_%2BoQBG54rDFP%2Bm%2B4A&guests=1',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      spotId: 3,
      url1: 'https://www.airbnb.com/rooms/33878037?check_in=2021-10-05&check_out=2021-10-22&previous_page_section_name=1000&translate_ugc=false&federated_search_id=1e06fa70-a364-4ad5-a007-b94f310ed628',
      url2: 'https://www.airbnb.com/rooms/33878037/photos?check_in=2021-10-05&check_out=2021-10-22&translate_ugc=false&federated_search_id=1e06fa70-a364-4ad5-a007-b94f310ed628&source_impression_id=p3_1631576615_%2BDXmEeccT5wzjt0Y&heroPhotoId=927863691',
      url3: 'https://www.airbnb.com/rooms/33878037/photos?check_in=2021-10-05&check_out=2021-10-22&translate_ugc=false&federated_search_id=1e06fa70-a364-4ad5-a007-b94f310ed628&source_impression_id=p3_1631576615_%2BDXmEeccT5wzjt0Y&heroPhotoId=927863704',
      url4: 'https://www.airbnb.com/rooms/33878037/photos?check_in=2021-10-05&check_out=2021-10-22&translate_ugc=false&federated_search_id=1e06fa70-a364-4ad5-a007-b94f310ed628&source_impression_id=p3_1631576615_%2BDXmEeccT5wzjt0Y&heroPhotoId=927863693',
      url5: 'https://www.airbnb.com/rooms/33878037/photos?check_in=2021-10-05&check_out=2021-10-22&translate_ugc=false&federated_search_id=1e06fa70-a364-4ad5-a007-b94f310ed628&source_impression_id=p3_1631576615_%2BDXmEeccT5wzjt0Y&heroPhotoId=927863697',
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
