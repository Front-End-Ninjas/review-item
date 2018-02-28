const mongoose = require('mongoose');
const Promise = require('bluebird');

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

function findAllReviews() {
  return new Promise((resolve, reject) => {
    reviewModel.find({}, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function insertOne(review) {
  return new Promise((resolve, reject) => {
    reviewModel.create(review, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

exports.findAllReviews = findAllReviews;
exports.insertOne = insertOne;
