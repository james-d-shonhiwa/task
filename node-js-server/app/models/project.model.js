module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("project", {
      code: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Project;
};