const express = require("express");
const router = express.Router();
var connection = require('./../database/serverConnector');

router.get('/', (req, res, next) => {
  connection.query('select * from products_type', function(error, results, fields) {
      if (error) res.status(500).send(error.sqlMessage);
    else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;
