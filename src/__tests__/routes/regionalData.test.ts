import request from 'supertest';
import app from '../../app';

describe('Test Regional Data Routes', () => {
  it('should return list of provinces', async () => {
    const { body, status } = await request(app).get('/api/provinces');

    const expected = {
      data: [
        { id: '11', nama: 'ACEH' },
        { id: '12', nama: 'SUMATERA UTARA' },
        { id: '13', nama: 'SUMATERA BARAT' },
        { id: '14', nama: 'RIAU' },
        { id: '15', nama: 'JAMBI' },
        { id: '16', nama: 'SUMATERA SELATAN' },
        { id: '17', nama: 'BENGKULU' },
        { id: '18', nama: 'LAMPUNG' },
        { id: '19', nama: 'KEPULAUAN BANGKA BELITUNG' },
        { id: '21', nama: 'KEPULAUAN RIAU' },
        { id: '31', nama: 'DKI JAKARTA' },
        { id: '32', nama: 'JAWA BARAT' },
        { id: '33', nama: 'JAWA TENGAH' },
        { id: '34', nama: 'DAERAH ISTIMEWA YOGYAKARTA' },
        { id: '35', nama: 'JAWA TIMUR' },
        { id: '36', nama: 'BANTEN' },
        { id: '51', nama: 'BALI' },
        { id: '52', nama: 'NUSA TENGGARA BARAT' },
        { id: '53', nama: 'NUSA TENGGARA TIMUR' },
        { id: '61', nama: 'KALIMANTAN BARAT' },
        { id: '62', nama: 'KALIMANTAN TENGAH' },
        { id: '63', nama: 'KALIMANTAN SELATAN' },
        { id: '64', nama: 'KALIMANTAN TIMUR' },
        { id: '65', nama: 'KALIMANTAN UTARA' },
        { id: '71', nama: 'SULAWESI UTARA' },
        { id: '72', nama: 'SULAWESI TENGAH' },
        { id: '73', nama: 'SULAWESI SELATAN' },
        { id: '74', nama: 'SULAWESI TENGGARA' },
        { id: '75', nama: 'GORONTALO' },
        { id: '76', nama: 'SULAWESI BARAT' },
        { id: '81', nama: 'MALUKU' },
        { id: '82', nama: 'MALUKU UTARA' },
        { id: '91', nama: 'P A P U A' },
        { id: '92', nama: 'PAPUA BARAT' },
      ],
    };

    expect(status).toBe(200);
    expect(JSON.stringify(body)).toMatch(JSON.stringify(expected));
  });

  it('should return kabupaten from provinsi Aceh', async () => {
    const { body, status } = await request(app).get('/api/cities?province_id=11');

    const expected = {
      data: [
        { id: '1101', nama: 'KAB. ACEH SELATAN' },
        { id: '1102', nama: 'KAB. ACEH TENGGARA' },
        { id: '1103', nama: 'KAB. ACEH TIMUR' },
        { id: '1104', nama: 'KAB. ACEH TENGAH' },
        { id: '1105', nama: 'KAB. ACEH BARAT' },
        { id: '1106', nama: 'KAB. ACEH BESAR' },
        { id: '1107', nama: 'KAB. PIDIE' },
        { id: '1108', nama: 'KAB. ACEH UTARA' },
        { id: '1109', nama: 'KAB. SIMEULUE' },
        { id: '1110', nama: 'KAB. ACEH SINGKIL' },
        { id: '1111', nama: 'KAB. BIREUEN' },
        { id: '1112', nama: 'KAB. ACEH BARAT DAYA' },
        { id: '1113', nama: 'KAB. GAYO LUES' },
        { id: '1114', nama: 'KAB. ACEH JAYA' },
        { id: '1115', nama: 'KAB. NAGAN RAYA' },
        { id: '1116', nama: 'KAB. ACEH TAMIANG' },
        { id: '1117', nama: 'KAB. BENER MERIAH' },
        { id: '1118', nama: 'KAB. PIDIE JAYA' },
        { id: '1171', nama: 'KOTA BANDA ACEH' },
        { id: '1172', nama: 'KOTA SABANG' },
        { id: '1173', nama: 'KOTA LHOKSEUMAWE' },
        { id: '1174', nama: 'KOTA LANGSA' },
        { id: '1175', nama: 'KOTA SUBULUSSALAM' },
      ],
    };

    expect(status).toBe(200);
    expect(JSON.stringify(body)).toMatch(JSON.stringify(expected));
  });

  it('should return 404 if id is invalid', async () => {
    const { body, status } = await request(app).get('/api/cities?province_id=100');

    const expected = {
      message: "Province doesn't exist",
    };

    expect(status).toBe(404);
    expect(JSON.stringify(body)).toMatch(JSON.stringify(expected));
  });
});
