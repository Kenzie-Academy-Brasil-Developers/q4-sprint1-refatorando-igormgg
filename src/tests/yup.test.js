import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import app from '../app';

const company = {
  name: 'TestCompany',
  password: '1234',
  cep: '70000000',
  address: 'Rua Tourinho Filho',
  number: '10',
  state: 'DF',
  city: 'Brasília',
};

const resp = {
  error: 'Campo de cnpj obrigátorio',
};

describe('Yup Test', () => {
  it('Should not be able to create a company without cnpj', async () => {
    const response = await request(app)
      .post('/companies/register')
      .send(company);

    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual(resp);
  });
});
