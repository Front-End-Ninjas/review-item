const express = require('express');
const Reviews = require('./schema.js');

const router = express.Router();


router.route('/:id/reviews')
  .get((req, res) => {
    Reviews.findAllReviews((err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        const filtered = [];
        results.forEach((item) => {
          if (item.itemId === Number(req.params.id)) {
            filtered.push(item);
          }
        });
        res.send(filtered);
      }
    });
  });


module.exports = router;
