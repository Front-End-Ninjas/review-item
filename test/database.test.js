const mongoose = require('mongoose');
const Reviews = require('../server/schema.js');
const data = require('../dummyData.js');
const seedDb = require('../seedData.js');

const url = process.env.MONGO_URL || 'mongodb://localhost/reviews';

describe('Mongo Database', () => {
  beforeAll(() => {
    mongoose.connect(url);
  });
  afterAll(() => {
    mongoose.disconnect(url);
  });

  it('should have reviews', () => (
    seedDb(data, () => {
      Reviews.findAllReviews().then((result) => {
        const numberOfData = result.length;
        expect(numberOfData).toBe(200);
      }).catch((err) => {
        console.error(err);
      });
    })));
});
