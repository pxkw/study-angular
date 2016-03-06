'use strict';
const server = require(process.env.PJ_HOME+'/src/server/server');
const request = require('request');
const BASE_URL = 'http://localhost:8080';

describe('Server', () => {
  beforeAll(server.start);
  afterAll(server.stop);

  it('GET / should respond with successful status', (done) => {
    request.get(BASE_URL+'/', (err, res, body) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});

