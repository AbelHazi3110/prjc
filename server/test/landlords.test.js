const request = require('supertest');
const app = require('../server');

describe('Landlords API', () => {
  it('GET /landlords --> array of landlords', () => {
    return request(app)
      .get('/landlords')
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
      });
  });
});
