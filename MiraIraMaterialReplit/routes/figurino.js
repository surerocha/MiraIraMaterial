var express = require('express');
var router = express.Router();

/* GET Figurinos page. */
router.get('/', function(req, res, next) {
  res.render('figurino', {title: "Figurinos" });
});

module.exports = router;
