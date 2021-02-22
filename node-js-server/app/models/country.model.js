module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
      code: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Country;
};