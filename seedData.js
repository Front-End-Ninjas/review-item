const data = require('./dummyData.js');
const mongoose = require('mongoose');
const Reviews = require('./server/schema.js');

mongoose.connect('mongodb://localhost/reviews');

const seedDb = (seed) => {
  seed.forEach((item) => {
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
};

seedDb(data);

module.exports = seedDb;
