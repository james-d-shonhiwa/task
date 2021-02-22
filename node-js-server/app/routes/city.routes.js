module.exports = app => {
    const cities = require("../controllers/city.controller.js");
  
    var router = require("express").Router();
  
    // Create a new City
    router.post("/", cities.create);
  
    // Retrieve all Cities
    router.get("/", cities.findAll);
  
    // Retrieve a single City with id
    router.get("/:id", cities.findOne);
  
    // Update a City with id
    router.put("/:id", cities.update);
  
    // Delete a City with id
    router.delete("/:id", cities.delete);
  
    // Delete all Cities
    router.delete("/", cities.deleteAll);
  
    app.use('/api/cities', router);
  };
  