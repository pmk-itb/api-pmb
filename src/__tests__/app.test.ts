import request from 'supertest';
import app from '../app';
import { prisma } from '../api-routes';

describe('Test the url', () => {
  it('should response 200 when hit /api', () => {
    return request(app).get('/api').expect(200);
  });

  it('should response 200 when hit /api/about', () => {
    return request(app).get('/api/about').expect(200);
  });

  it('should response 200 when hit /api/departments', async () => {
    const response = await request(app).get('/api/departments');
    expect(response.statusCode).toBe(200);
  });

  // it('should be able to create department from /api/departments', async () => {
  //   const data = {
  //     code: 'STEI',
  //     name: 'Sekolah Teknik dan Informatika',
  //     location: Location.GANESA,
  //   };

  //   const response = await request(app).post('/api/departments').send(data);
  //   expect(response.statusCode).toBe(200);
  // });

  it('should response 201 when hit /api/members succeeded', async () => {
    const data = {
      nim: 16521225,
      name: 'Stefanus Gusega Gunawan',
      nickname: 'Evan',
      majorId: 71,
      gender: 'MALE',
      birthDate: '2000-09-02T00:00:00Z',
      line: 'stefanusline',
      phone: '0881234567890',
      email: 'stefanus@mail.com',
      originProvince: 'Jawa Timur',
      originCity: 'Kota Surabaya',
      originSchool: 'SMA Negeri 5 Surabaya',
      originChurch: 'GBIS Damai Sejahtera',
      parentName: 'Orang Tua',
      parentPhone: '0811234567890',
      parentRelationship: 'AYAH',
      discipleshipId: 1,
    };

    const response = await request(app).post('/api/members').send(data);
    expect(response.statusCode).toBe(201);
    expect(response.body.data.year).toBe(2021);
    expect(response.body.data.tpbNim).toBe(response.body.data.nim);
  });

  it('should response 201 when hit /api/members succeeded with same parent phone and update the members of parent', async () => {
    const data = {
      nim: 16521226,
      name: 'Stefanus Gusega Gunawan',
      nickname: 'Evan',
      majorId: 71,
      gender: 'MALE',
      birthDate: '2000-09-02T00:00:00Z',
      line: 'stefanusline',
      phone: '0881234567890',
      email: 'stefanus@mail.com',
      originProvince: 'Jawa Timur',
      originCity: 'Kota Surabaya',
      originSchool: 'SMA Negeri 5 Surabaya',
      originChurch: 'GBIS Damai Sejahtera',
      parentName: 'Orang Tua',
      parentPhone: '0811234567890',
      parentRelationship: 'AYAH',
      discipleshipId: 1,
    };

    const response = await request(app).post('/api/members').send(data);

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
    expect(parent?.children[0].tpbNim).toBe(16521225);
    expect(parent?.children[1].tpbNim).toBe(16521226);
  });

  it('should response 400 when hit /api/members, but with existing nim', async () => {
    const data = {
      nim: 16521225,
      name: 'Stefanus Gusega Gunawan',
      nickname: 'Evan',
      majorId: 71,
      gender: 'MALE',
      birthDate: '2000-09-02T00:00:00Z',
      line: 'stefanusline',
      phone: '0881234567890',
      email: 'stefanus@mail.com',
      originProvince: 'Jawa Timur',
      originCity: 'Kota Surabaya',
      originSchool: 'SMA Negeri 5 Surabaya',
      originChurch: 'GBIS Damai Sejahtera',
      parentName: 'Orang Tua',
      parentPhone: '0811234567890',
      parentRelationship: 'AYAH',
      discipleshipId: 1,
    };

    const response = await request(app).post('/api/members').send(data);
    expect(response.statusCode).toBe(400);
    expect(response.body.message.code).toBe('P2002');
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
