const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /books should return book id, title and released', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toBe(9);
    expect(res.body[0]).toEqual({
      id: '1',
      title: 'The Hobbit or There and Back Again',
      released: 1937,
    });
  });
  it('#GET /authors should return id and name', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toBe(4);
    expect(res.body[0]).toEqual({
      id: '1',
      name: 'J.R.R. Tolkein',
      dob: 1892,
      pob: 'Bloemfontein',
    });
  });
  it('#GET /books:id return an id, title, released, and author id, name array', async () => {
    const res = await request(app).get('/books/1');
    expect(res.body).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(Number),
      authors: expect.any(Array),
    });
  });
  afterAll(() => {
    pool.end();
  });
});
