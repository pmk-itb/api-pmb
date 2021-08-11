import { Location } from '@prisma/client';
import request from 'supertest';
import app from '../app';
import { prisma } from '../api-routes';

describe('Test the url', () => {
  /* /api GET route */
  it('should response 401 when hit /api without token', () => {
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

  /* /api/about GET route */
  it('should response 401 when hit /api/about without token', () => {
    return request(app).get('/api/about').expect(401);
  });
  it('should response 403 when hit /api/about using incorrect token', () => {
    const key = {
      Authorization: 'Bearer incorrectToken123',
    };
    return request(app).get('/api/about').set(key).expect(403);
  });
  it('should response 200 when hit /api/about using correct token', () => {
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };
    return request(app).get('/api/about').set(key).expect(200);
  });

  /* /api/departments GET route */
  it('should response 401 when hit /api/departments without token', async () => {
    const response = await request(app).get('/api/departments');
    expect(response.statusCode).toBe(401);
  });
  it('should response 403 when hit /api/departments using incorrect token', async () => {
    const key = {
      Authorization: 'Bearer incorrectToken123',
    };
    const response = await request(app).get('/api/departments').set(key);
    expect(response.statusCode).toBe(403);
  });
  it('should response 200 when hit /api/departments using correct token', async () => {
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };
    const response = await request(app).get('/api/departments').set(key);
    expect(response.statusCode).toBe(200);
  });

  // it('should response 200 when hit /api/departments', async () => {
  //   const response = await request(app).get('/api/departments');
  //   expect(response.statusCode).toBe(200);
  // });

  /* /api/departments POST route */
  it('should response 401 when trying to POST /api/departments without token', async () => {
    const data = {
      code: 'STEI',
      name: 'Sekolah Teknik dan Informatika',
      location: Location.GANESA,
    };
    const response = await request(app).post('/api/departments').send(data);
    expect(response.statusCode).toBe(401);
  });
  it('should response 403 when trying to POST /api/departments using incorrect token', async () => {
    const data = {
      code: 'STEI',
      name: 'Sekolah Teknik dan Informatika',
      location: Location.GANESA,
    };
    const key = {
      Authorization: 'Bearer incorrectToken123',
    };
    const response = await request(app).post('/api/departments').set(key).send(data);
    expect(response.statusCode).toBe(403);
  });
  it('should be able to create department from /api/departments', async () => {
    const data = {
      code: 'STEI',
      name: 'Sekolah Teknik dan Informatika',
      location: Location.GANESA,
    };
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };
    const response = await request(app).post('/api/departments').set(key).send(data);
    expect(response.statusCode).toBe(200);
  });

  /* /api/test GET route */
  it('should response 401 when hit /api/test without token', () => {
    return request(app).get('/api/test').expect(401);
  });
  it('should response 403 when hit /api/test using incorrect token', () => {
    const key = {
      Authorization: 'Bearer incorrectToken123',
    };
    return request(app).get('/api/test').set(key).expect(403);
  });
  it('should response 200 when hit /api/test', () => {
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };
    return request(app).get('/api/test').set(key).expect(200);
  });

  afterAll((done) => {
    prisma.$disconnect();
    done();
  });
});
