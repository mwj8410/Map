const expect = require('expect');
// const http = require('http');
const request = require('supertest');

module.exports = server => {

  describe('/state/', () => {

    describe('player/', () => {

      it('list/ returns an empty list of player when there are no players', done => {
        request.agent(server)
          .get('/state/player/list')
          .send()
          .expect(200, (err, res) => {
            if (err) {
              done(err);
              return;
            }
            expect(res.body.length).toBe(0);
            done();
          });
      });

      it('accepts an attempt to create a new player', done => {
        request.agent(server)
          .post('/state/player')
          .send({
            playerName: 'test player name'
          })
          .expect(200, err => {
            if (err) done(err);
            else done();
          });
      });

      it('list/ returns a list with the new player', done => {
        request.agent(server)
          .get('/state/player/list')
          .send()
          .expect(200, (err, res) => {
            if (err) {
              done(err);
              return;
            }
            expect(res.body.length).toBe(1);
            expect(res.body[0].name).toBe('test player name');
            done();
          });
      });

    });

    // describe('list/', () => {
    //
    //   it('returns an empty list of states when there are no states', done => {
    //     request.agent(server)
    //       .get('/state/list')
    //       .send()
    //       .expect(200, (err, res) => {
    //         if (err) {
    //           done(err);
    //           return;
    //         }
    //         expect(res.body.length).toBe(0);
    //         done();
    //       });
    //   });
    //
    //   it('accepts an attempt to create a new state', done => {
    //     request.agent(server)
    //       .post('/state/list')
    //       .send({
    //         stateName: 'test state name'
    //       })
    //       .expect(200, err => {
    //         if (err) done(err);
    //         else done();
    //       });
    //   });
    //
    //   it('returns a list with the newly created state', done => {
    //     request.agent(server)
    //       .get('/state/list')
    //       .send()
    //       .expect(200, (err, res) => {
    //         if (err) {
    //           done(err);
    //           return;
    //         }
    //         expect(res.body.length).toBe(1);
    //         expect(res.body[0].stateName).toBe('test state name');
    //         done();
    //       });
    //   });
    //
    // });

    describe('world/', () => {

      it('list/ returns an empty list of worlds when there are no worlds', done => {
        request.agent(server)
          .get('/state/world/list')
          .send()
          .expect(200, (err, res) => {
            if (err) {
              done(err);
              return;
            }
            expect(res.body.length).toBe(0);
            done();
          });
      });

      it('accepts an attempt to create a new state', done => {
        request.agent(server)
          .post('/state/world')
          .send({
            worldName: 'test world name'
          })
          .expect(200, err => {
            if (err) done(err);
            else done();
          });
      });

      it('list/ returns a list with the newly created world', done => {
        request.agent(server)
          .get('/state/world/list')
          .send()
          .expect(200, (err, res) => {
            if (err) {
              done(err);
              return;
            }
            expect(res.body.length).toBe(1);
            expect(res.body[0].name).toBe('test world name');
            done();
          });
      });

    });

  });
};
