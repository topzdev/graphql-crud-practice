const Sequelize = require("sequelize");
const database = require("../database");
const sequelize = database;

const models = {
  User: sequelize.import('./user'),
  Post: sequelize.import('./post')
}

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = database;
models.Sequelize = Sequelize;

module.exports = models;
