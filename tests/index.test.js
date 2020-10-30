const request = require('supertest')
const axios = require('axios')
const app = require('../app')

jest.mock('axios')


describe('GET /', function() {
  it('responds with hello world', function(done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text\/html/)
      .expect(200)
      .then(response => {
        expect(response.text).toEqual('Hello World')
        done()
      })
  });
})

describe('GET /info', () => {
  
  it('responds with error', function(done) {
    const mockData = null

    axios.get.mockImplementationOnce(() => Promise.resolve(mockData))

    request(app)
      .get('/info')
      .set('Accept', 'application/json')
      .expect(500, done)
  });

  it('responds with info', function(done) {
    const mockData = {
      data: {
        name: 'Ricardo Cortes'
      }
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(mockData))

    request(app)
      .get('/info')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(mockData.data)
        done()
      })
  });
});

