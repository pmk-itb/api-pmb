import request from 'supertest';
import app from '../app';

describe('Test the url', () => {
  test('It should response the GET method', () => {
    return request(app).get('/api').expect(200);
  });
});
