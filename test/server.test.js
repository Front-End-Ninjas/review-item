const request = require('supertest');
const app = require('../server/app');
const seedData = require('../seedData.js');
const data = require('../dummyData.js');

describe('Server Test', () => {
  test('It should respond with 200 when item is found', () => {
    return request(app).get('/item/1/reviews').expect(200);
  });
})

describe('Server Test', () => {
  test('It should respond with 404 when not found', () => {
    return request(app).get('/pages').expect(404);
  });
});
