const mongoose = require('mongoose');
const Reviews = require('../server/schema.js');

mongoose.connect('mongodb://localhost/reviews');

describe('Mongo Database', () => {
  it('should have 300 reviews', () => (
    Reviews.findAllReviews().then((result) => {
      const numberOfData = result.length;
      expect(numberOfData).toBe(891);
    }).catch((err) => {
      console.error(err);
    })
  ));
});
