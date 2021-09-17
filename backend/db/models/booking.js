'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    guestNumber: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: 'userId', onDelete:'CASCADE', hooks: true });
    Booking.belongsTo(models.Spot, { foreignKey: 'spotId', onDelete:'CASCADE', hooks: true });
  };
  return Booking;
};
