const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(4);
    const fellowship = res.body.find((book) => book.id)
  });
  afterAll(() => {
    pool.end();
  });
});
