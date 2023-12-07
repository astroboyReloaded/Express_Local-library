const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Wikki home page');
});

router.get('/about', function(req, res) {
  res.send('Aboutn this wiki');
});

module.exports = router;
