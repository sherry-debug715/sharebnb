'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Spot, { foreignKey: 'spotId', onDelete:'CASCADE', hooks: true});
    Review.belongsTo(models.User, { foreignKey: 'userId', onDelete:'CASCADE', hooks: true });
  };
  return Review;
};
