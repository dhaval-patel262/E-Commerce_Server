const express = require("express");
const router = express.Router();
var connection = require('./../database/serverConnector');

router.get('/category_id/:categoryId/product_id/:productId', (req, res, next) => {
  connection.query('select * from product where (id = ? or ? = 0) and (category = ? or ?  = 0 )', [req.params.productId, req.params.productId, req.params.categoryId, req.params.categoryId], function(error, results, fields) {
      if (error) {
      res.status(500).json([{
        message: error.sqlMessage
      }]);
    }
    else {
      console.log("Query made for category type " + req.params.categoryId + " & product_type " + req.params.productId);
      res.status(200).send(results);
    }
  });
});

module.exports = router;
