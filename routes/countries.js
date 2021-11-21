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

// Get Country Details by ISO 2 Code.
router.get('/iso2/:iso2/', country_controller.iso2);

// Get Country Details by ISO 3 Code.
router.get('/iso3/:iso3/', country_controller.iso3);

module.exports = router;