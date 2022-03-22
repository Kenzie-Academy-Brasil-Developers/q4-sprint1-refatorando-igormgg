import app from '../app';
import request from 'supertest';

import { companies } from '../configs';
import { describe, expect, it } from '@jest/globals';

describe('Get Companies Test', () => {
  it('Should get all companies registered', async () => {
    const response = await request(app).get('/companies');

    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual(companies);
  });
});
