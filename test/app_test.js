/*
const { chai } = require('chai');
const { expect } = require('chai');
const { chaiHttp } = require('chai-http');

const app = '../pages/index.js';

//chai.use(chaiHttp);

describe('Basic routes tests', function() {

    it('GET to / should return 200', function(done){
        chai.request(app)
        .get('/')
        .end(function(err, res) {
            expect(response).to.have.status(200);
            done();
        })

    })
})

describe('Ready liveness db tests', function() {

    it('GET to /api/health/ready should return 200', function(done){
        chai.request(app)
        .get('/api/health/ready')
        .end(function(err, res) {
            expect(response).to.have.status(200);
            done();
        })

    })
})
*/