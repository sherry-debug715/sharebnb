'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, { foreignKey: 'userId', onDelete:'CASCADE', hooks: true });
    Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete:'CASCADE', hooks: true });
    Spot.hasMany(models.Review, { foreignKey: 'spotId', onDelete:'CASCADE', hooks: true });
    Spot.hasMany(models.Image, { foreignKey: 'spotId', onDelete:'CASCADE', hooks: true });
  };
  return Spot;
};
