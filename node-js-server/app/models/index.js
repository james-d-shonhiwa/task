const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.countries = require("./country.model.js")(sequelize, Sequelize);
db.cities = require("./city.model.js")(sequelize, Sequelize);
db.projects = require("./project.model.js")(sequelize, Sequelize);

db.countries.hasMany(db.cities, { as: "cities" });
db.cities.belongsTo(db.countries, {
  foreignKey: "countryId",
  as: "country",
});

db.cities.hasMany(db.projects, { as: "projects" });
db.projects.belongsTo(db.cities, {
  foreignKey: "cityId",
  as: "city",
});

module.exports = db;
