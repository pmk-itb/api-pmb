import { Location } from '@prisma/client';
import request from 'supertest';
import app from '../app';

describe('Test the url', () => {
  it('should response 200 when hit /api', () => {
    jest.setTimeout(10000);
    return request(app).get('/api').expect(200);
  });

  it('should response 200 when hit /api/about', () => {
    return request(app).get('/api/about').expect(200);
  });

  it('should response 200 when hit /api/departments', () => {
    return request(app).get('/api/departments').expect(200);
  });

  it('should be able to create department from /api/departments', () => {
    const data = {
      code: 'STEI',
      name: 'Sekolah Teknik dan Informatika',
      location: Location.GANESA,
    };
    return request(app).post('/api/departments').send(data).expect(200);
  });

  it('should response 200 when hit /api/test', () => {
    return request(app).get('/api/test').expect(200);
  });
});
