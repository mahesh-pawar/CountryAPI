const express = require('express');
const router = express.Router();

var country_controller = require('../controllers/countryController.js');

// Get Country Details.
router.get('/', country_controller.index);

// Get Country Details by Country Name.
router.get('/name/:name/', country_controller.name);

// Get Country Details by Currency Code.
router.get('/currency/:currency/', country_controller.currency);

// Get Country Details by Currency Code.
router.get('/phone/:phone/', country_controller.phone);

// Get Country Details by ISO 3 Code.
router.get('/code/:code/', country_controller.code);

module.exports = router;