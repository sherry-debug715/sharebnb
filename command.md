npx sequelize-cli seed:generate --name spot
npx sequelize-cli seed:generate --name booking
npx sequelize-cli seed:generate --name image
npx sequelize-cli seed:generate --name review
npx sequelize-cli seed:generate --name user

npx dotenv sequelize db:drop
npx dotenv sequelize db:create
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all
npx dotenv sequelize db:migrate:undo

npx sequelize-cli model:generate --name Image --attributes spotId:Integer,url1:String,url2:String,url3:String,url4:String,url5:String
npx sequelize-cli model:generate --name Booking --attributes spotId:Integer,userId:Integer,startDate:Date,endDate:Date
