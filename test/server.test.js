const mongoose = require('mongoose');
const Reviews = require('../server/schema.js');
const data = require('../dummyData.js');
const seedDb = require('../seedData.js');


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

const url = process.env.MONGO_URL || 'mongodb://localhost/reviews';

describe('Mongo Database', () => {
  beforeAll(() => {
    mongoose.connect(url);
  });
  afterAll(() => {
    mongoose.disconnect();
  });

  it('should have reviews', () => (
    seedDb(data, () => {
      Reviews.findAllReviews().then((result) => {
        const numberOfData = result.length;
        expect(numberOfData).toBe(1);
      }).catch((err) => {
        console.error(err);
      });
    })));
});
