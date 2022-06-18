const Lab = require('@hapi/lab');

const { expect } = require('@hapi/code');

const {
  afterEach, beforeEach, describe, it,
} = exports.lab = Lab.script();

const { init } = require('../src/server.test');

describe('GET /', () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('responds with 404', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/',
    });
    expect(res.statusCode).to.equal(404);
  });

  it('responds with 200 on albums', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/albums',
    });
    expect(res.statusCode).to.equal(200);
  });

  it('responds with 200 on songs', async () => {
    const res = await server.inject({
      method: 'get',
      url: '/songs',
    });
    expect(res.statusCode).to.equal(200);
  });
});
