const mongoose = require('mongoose');
const Reviews = require('../server/schema.js');
const seedDb = require('../seedData.js');
const data = require('../dummyData.js');

mongoose.connect('mongodb://localhost/reviews');

const reviewSchema = mongoose.Schema({
  itemId: Number,
  username: String,
  rating: {
    type: Number,
    max: 5,
  },
  comment: String,
  reviewTitle: String,
  reviewDate: String,
  purchased: Boolean,
});

const reviewModel = mongoose.model('Review', reviewSchema);

describe('Mongo Database', () => {
  beforeAll(() => {
    seedDb(data);
  });
  afterAll(() => {
    mongoose.disconnect();
  });

  it('should have 300 reviews', () => (
    Reviews.findAllReviews().then((result) => {
      const numberOfData = result.length;
      expect(numberOfData).toBe(891);
    }).catch((err) => {
      console.error(err);
    })
  ));
});
