const mongoose = require('mongoose');
const Reviews = require('../server/schema.js');
const data = require('../dummyData.js');

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

describe('Mongo Database', () => {
  beforeAll(() => {
    mongoose.connect('mongodb://localhost/reviews');
    data.forEach((item) => {
      for (let i = 0; i < item.reviews.length; i += 1) {
        const insertReview = {
          itemId: item.id,
          username: item.reviews[i].username,
          rating: item.reviews[i].rating,
          comment: item.reviews[i].comment,
          reviewTitle: item.reviews[i].reviewTitle,
          reviewDate: item.reviews[i].date,
          purchased: item.reviews[i].purchased,
        };
        Reviews.insertOne(insertReview).catch((err) => {
          console.error(err);
        });
      }
    });
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
