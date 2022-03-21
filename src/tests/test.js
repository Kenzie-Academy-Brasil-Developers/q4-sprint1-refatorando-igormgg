// users.test.js
import { describe, expect, it } from '@jest/globals';
import request from 'supertest';
import app from '../app';

const company = {
  name: 'TestCompany',
  cnpj: '42814413000150',
  password: '1234',
  cep: '70000000',
  address: 'Rua Tourinho Filho',
  number: '10',
  state: 'DF',
  city: 'Brasília',
};

const resp = {
  message: 'Company successfully created',
  company: {
    name: 'TestCompany',
    cnpj: '42814413000150',
    password: '$2a$10$z0Opvy24ZJcM5DS.0BoZk.0gUwodZL9uQthotFP0.jvf.58KPr1jm',
    cep: '70000000',
    address: 'Rua Tourinho Filho',
    number: '10',
    state: 'DF',
    city: 'Brasília',
    id: 'f96b0618-d13e-4200-a6d7-38b48f079f23',
    vehicles: [],
  },
};

describe('Users Tests', () => {
  it('Should create a company register', async () => {
    const response = await request(app)
      .post('/companies/register')
      .send(company);

    expect(response.statusCode).toBe(201);
    expect(response.body).toStrictEqual(user);
  });
});
