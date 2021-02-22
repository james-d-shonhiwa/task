module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define("city", {
      code: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return City;
};