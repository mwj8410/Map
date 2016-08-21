// const expect = require('expect');
const request = require('supertest');

module.exports = server => {

  describe('/shutdown/', () => {
    it('returns `ok` when called', done => {
      request.agent(server)
        .post('/shutdown/')
        .send()
        .expect(200, done);
    });
  });
};
