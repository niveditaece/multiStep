var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserData = require('../models/UserData');

/* GET ALL userdata */
router.get('/', function(req, res, next) {
  UserData.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE userdata BY ID */
router.get('/:id', function(req, res, next) {
  UserData.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE userdata */
router.post('/', function(req, res, next) {
  console.log('in the expressrouter '+req.body);
  UserData.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;