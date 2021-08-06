import { Location } from '@prisma/client';
import request from 'supertest';
import app from '../app';
import { prisma } from '../api-routes';

describe('Test the url', () => {
  it('should response 401 when hit/api without token', () => {
    return request(app).get('/api').expect(401);
  });

  it('should response 403 when hit /api using incorrect token', () => {
    const key = {
      Authorization: 'Bearer incorrectToken123',
    };
    return request(app).get('/api').set(key).expect(403);
  });
  it('should response 200 when hit /api using correct token', () => {
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };
    return request(app).get('/api').set(key).expect(200);
  });

  it('should response 200 when hit /api/about', () => {
    return request(app).get('/api/about').expect(200);
  });

  it('should response 200 when hit /api/departments', async () => {
    const response = await request(app).get('/api/departments');
    expect(response.statusCode).toBe(200);
  });

  it('should be able to create department from /api/departments', async () => {
    const data = {
      code: 'STEI',
      name: 'Sekolah Teknik dan Informatika',
      location: Location.GANESA,
    };

    const response = await request(app).post('/api/departments').send(data);
    expect(response.statusCode).toBe(200);
  });

  it('should response 200 when hit /api/test', async () => {
    const response = await request(app).get('/api/test');
    expect(response.statusCode).toBe(200);
  });

  afterAll((done) => {
    prisma.$disconnect();
    done();
  });
});
