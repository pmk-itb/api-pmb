import request from 'supertest';
import app from '../../app';

describe('Test Regional Data Routes', () => {
  it('should return list of provinces', async () => {
    const token = process.env.API_KEY as string;
    const { body, status } = await request(app).get('/api/provinces').auth(token, { type: 'bearer' });

    const expected = {
      data: [
        { id: '06', nama: 'ACEH' },
        { id: '07', nama: 'SUMATERA UTARA' },
        { id: '08', nama: 'SUMATERA BARAT' },
        { id: '09', nama: 'RIAU' },
        { id: '10', nama: 'JAMBI' },
        { id: '11', nama: 'SUMATERA SELATAN' },
        { id: '26', nama: 'BENGKULU' },
        { id: '12', nama: 'LAMPUNG' },
        { id: '29', nama: 'KEPULAUAN BANGKA BELITUNG' },
        { id: '31', nama: 'KEPULAUAN RIAU' },
        { id: '01', nama: 'DKI JAKARTA' },
        { id: '02', nama: 'JAWA BARAT' },
        { id: '03', nama: 'JAWA TENGAH' },
        { id: '04', nama: 'DAERAH ISTIMEWA YOGYAKARTA' },
        { id: '05', nama: 'JAWA TIMUR' },
        { id: '28', nama: 'BANTEN' },
        { id: '22', nama: 'BALI' },
        { id: '23', nama: 'NUSA TENGGARA BARAT' },
        { id: '24', nama: 'NUSA TENGGARA TIMUR' },
        { id: '13', nama: 'KALIMANTAN BARAT' },
        { id: '14', nama: 'KALIMANTAN TENGAH' },
        { id: '15', nama: 'KALIMANTAN SELATAN' },
        { id: '16', nama: 'KALIMANTAN TIMUR' },
        { id: '34', nama: 'KALIMANTAN UTARA' },
        { id: '17', nama: 'SULAWESI UTARA' },
        { id: '18', nama: 'SULAWESI TENGAH' },
        { id: '19', nama: 'SULAWESI SELATAN' },
        { id: '20', nama: 'SULAWESI TENGGARA' },
        { id: '30', nama: 'GORONTALO' },
        { id: '33', nama: 'SULAWESI BARAT' },
        { id: '21', nama: 'MALUKU' },
        { id: '27', nama: 'MALUKU UTARA' },
        { id: '25', nama: 'PAPUA' },
        { id: '32', nama: 'PAPUA BARAT' },
      ],
    };

    expect(status).toBe(200);
    expect(JSON.stringify(body)).toMatch(JSON.stringify(expected));
  });

  it('should return kabupaten from provinsi Aceh', async () => {
    const token = process.env.API_KEY as string;
    const { body, status } = await request(app).get('/api/cities?province_id=06').auth(token, { type: 'bearer' });

    const expected = {
      data: [
        { id: '060700', nama: 'KAB. ACEH SELATAN' },
        { id: '060800', nama: 'KAB. ACEH TENGGARA' },
        { id: '060400', nama: 'KAB. ACEH TIMUR' },
        { id: '060500', nama: 'KAB. ACEH TENGAH' },
        { id: '060600', nama: 'KAB. ACEH BARAT' },
        { id: '060100', nama: 'KAB. ACEH BESAR' },
        { id: '060200', nama: 'KAB. PIDIE' },
        { id: '060300', nama: 'KAB. ACEH UTARA' },
        { id: '061100', nama: 'KAB. SIMEULUE' },
        { id: '061300', nama: 'KAB. ACEH SINGKIL' },
        { id: '061200', nama: 'KAB. BIREUEN' },
        { id: '061700', nama: 'KAB. ACEH BARAT DAYA' },
        { id: '061800', nama: 'KAB. GAYO LUES' },
        { id: '061600', nama: 'KAB. ACEH JAYA' },
        { id: '061500', nama: 'KAB. NAGAN RAYA' },
        { id: '061400', nama: 'KAB. ACEH TAMIANG' },
        { id: '061900', nama: 'KAB. BENER MERIAH' },
        { id: '062000', nama: 'KAB. PIDIE JAYA' },
        { id: '066100', nama: 'KOTA BANDA ACEH' },
        { id: '066000', nama: 'KOTA SABANG' },
        { id: '066200', nama: 'KOTA LHOKSEUMAWE' },
        { id: '066300', nama: 'KOTA LANGSA' },
        { id: '066400', nama: 'KOTA SUBULUSSALAM' },
      ],
    };

    expect(status).toBe(200);
    expect(JSON.stringify(body)).toMatch(JSON.stringify(expected));
  });

  it('should return 404 if id is invalid', async () => {
    const token = process.env.API_KEY as string;
    const { body, status } = await request(app).get('/api/cities?province_id=100').auth(token, { type: 'bearer' });

    const expected = {
      message: "Province doesn't exist",
    };

    expect(status).toBe(404);
    expect(JSON.stringify(body)).toMatch(JSON.stringify(expected));
  });

  it("should return 200 from the school's query", async () => {
    const token = process.env.API_KEY as string;
    const { status } = await request(app).get('/api/schools?city_id=316100').auth(token, { type: 'bearer' });

    expect(status).toBe(200);
  });

  it("should return 200 from the church's query if the id exists", async () => {
    const token = process.env.API_KEY as string;
    const { body, status } = await request(app).get('/api/churches?city_id=056000').auth(token, { type: 'bearer' });

    const expectedData = {
      data: [
        'Gereja Bethany Nginden Surabaya',
        'GTI Bukit Zaitun',
        'Gereja Bethany Nginden',
        'Gereja Kristen Indonesia Merisi Indah',
        'GSKI Jemaat Bethany Manyar',
        'GKJW Wiyung',
        'YHS',
        'GKA Gloria',
        'GKI Pregbun',
      ],
    };

    expect(status).toBe(200);
    expect(JSON.stringify(body)).toMatch(JSON.stringify(expectedData));
  });

  it("should return 200 from the church's query even if the id doesn't exist", async () => {
    const token = process.env.API_KEY as string;
    const { body, status } = await request(app).get('/api/churches?city_id=060500').auth(token, { type: 'bearer' });

    const expectedData = {
      data: [],
    };

    expect(status).toBe(200);
    expect(JSON.stringify(body)).toMatch(JSON.stringify(expectedData));
  });
});
