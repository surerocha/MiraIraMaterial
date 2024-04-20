// Código sobre a empresa Replit
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('material' , { title: 'Material' });
});

module.exports = router;