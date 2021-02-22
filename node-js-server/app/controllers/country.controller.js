const db = require("../models");
const Country = db.countries;
const Op = db.Sequelize.Op;

// Create and Save a new Country
exports.create = (req, res) => {
  // Validate request
  if (!req.body.code) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Country
  const country = {
    code: req.body.code,
    description: req.body.description,
  };

  // Save Country in the database
  Country.create(country)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Country."
      });
    });
};

// Retrieve all Countries from the database.
exports.findAll = (req, res) => {
  const code = req.query.code;
  var condition = code ? { code: { [Op.like]: `%${code}%` } } : null;

  Country.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving countries."
      });
    });
};

// Find a single Country with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Country.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Country with id=" + id
      });
    });
};

// Update a Country by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Country.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Country was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Country with id=${id}. Maybe Country was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Country with id=" + id
      });
    });
};

// Delete a Country with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Country.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Country was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Country with id=${id}. Maybe Country was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Country with id=" + id
      });
    });
};

// Delete all Countries from the database.
exports.deleteAll = (req, res) => {
  Country.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Countries were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all countries."
      });
    });
};

