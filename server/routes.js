const express = require('express');
const Reviews = require('./schema.js');

const router = express.Router();


router.route('/:id/reviews')
  .get((req, res) => {
    Reviews.findAllReviews().then((result) => {
      const filtered = [];
      result.forEach((item) => {
        if (item.itemId === Number(req.params.id)) {
          filtered.push(item);
        }
      });
      res.send(filtered);
    }).catch((err) => {
      console.error(err);
    });
  });

module.exports = router;
