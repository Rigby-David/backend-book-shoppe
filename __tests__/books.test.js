const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const { request } = require('express');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET should return author id and their name', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(4);
  });
  afterAll(() => {
    pool.end();
  });
});
