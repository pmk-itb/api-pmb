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

  it('should response 201 when hit /api/members succeeded', async () => {
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };
    const data = {
      nim: '16521225',
      name: 'Stefanus Gusega Gunawan',
      nickname: 'Evan',
      majorId: 71,
      gender: 'MALE',
      birthDate: '2000-09-02',
      line: 'stefanusline',
      phone: '0881234567890',
      email: 'stefanus@mail.com',
      originProvince: 'Jawa Timur',
      originCity: 'Kota Surabaya',
      originSchool: 'SMA Negeri 5 Surabaya',
      originChurch: 'GBIS Damai Sejahtera',
      parentPhone: '0811234567890',
      parentRelationship: 'AYAH',
      discipleshipId: 1,
    };

    const response = await request(app).post('/api/members').set(key).send(data);
    expect(response.statusCode).toBe(201);
    expect(response.body.data.year).toBe(2021);
    expect(response.body.data.tpbNim).toBe(response.body.data.nim);
  });

  it('should response 201 when hit /api/members succeeded with same parent phone and update the members of parent', async () => {
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };

    const data = {
      nim: '16521226',
      name: 'Stefanus Gusega Gunawan',
      nickname: 'Evan',
      majorId: 71,
      gender: 'MALE',
      birthDate: '2000-09-02',
      line: 'stefanusline',
      phone: '0881234567890',
      email: 'stefanus@mail.com',
      originProvince: 'Jawa Timur',
      originCity: 'Kota Surabaya',
      originSchool: 'SMA Negeri 5 Surabaya',
      originChurch: 'GBIS Damai Sejahtera',
      parentPhone: '0811234567890',
      parentRelationship: 'AYAH',
      discipleshipId: 1,
    };

    const response = await request(app).post('/api/members').set(key).send(data);

    const parent = await prisma.parent.findFirst({
      where: {
        phone: '0811234567890',
      },
      include: {
        children: true,
      },
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.data.year).toBe(2021);
    expect(response.body.data.tpbNim).toBe(response.body.data.nim);
    expect(parent?.children.length).toBe(2);
    expect(parent?.children[0].tpbNim).toBe('16521225');
    expect(parent?.children[1].tpbNim).toBe('16521226');
  });

  it('should response 400 when hit /api/members, but with existing nim', async () => {
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };

    const data = {
      nim: '16521225',
      name: 'Stefanus Gusega Gunawan',
      nickname: 'Evan',
      majorId: 71,
      gender: 'MALE',
      birthDate: '2000-09-02',
      line: 'stefanusline',
      phone: '0881234567890',
      email: 'stefanus@mail.com',
      originProvince: 'Jawa Timur',
      originCity: 'Kota Surabaya',
      originSchool: 'SMA Negeri 5 Surabaya',
      originChurch: 'GBIS Damai Sejahtera',
      parentPhone: '0811234567890',
      parentRelationship: 'AYAH',
      discipleshipId: 1,
    };

    const expectedFailMessage =
      '\nInvalid `prisma.member.create()` invocation:\n\n\n  Unique constraint failed on the fields: (`nim`)';

    const response = await request(app).post('/api/members').set(key).send(data);
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(expectedFailMessage);
  });

  it('should response 200 when hit /api/mentors', async () => {
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };

    const response = await request(app).get('/api/test').set(key);
    expect(response.statusCode).toBe(200);
  });

  /* /api/mentors GET route */
  it('should response 401 when hit /api/mentors without token', () => {
    return request(app).get('/api/mentors').expect(401);
  });
  it('should response 403 when hit /api/mentors using incorrect token', () => {
    const key = {
      Authorization: 'Bearer incorrectToken123',
    };
    return request(app).get('/api/mentors').set(key).expect(403);
  });
  it('should response 200 when hit /api/mentors', () => {
    const key = {
      Authorization: 'Bearer ' + process.env.API_KEY,
    };
    return request(app).get('/api/mentors').set(key).expect(200);
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
