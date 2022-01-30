var chai = require('chai'),
chaiHttp = require('chai-http'),
expect = chai.expect;

chai.use(chaiHttp);

describe('request api/calculate/add', function() {
  it('should return 10 when n1 is 5 and n2 is 5', function() {   
    chai.request('http://localhost:3000')
    .post('/api/calculate/add')
    .send({
      n1 : 5,
	    n2 : 5
    })
    .end(function(err, res) {
      expect(res).to.have.status(200);  
      expect(Number(res.text)).to.equal(10);   
    });
  });
});

describe('request api/calculate/sub', function() {
  it('should return 10 when n1 is 20 and n2 is 10', function() {   
    chai.request('http://localhost:3000')
    .post('/api/calculate/sub')
    .send({
      n1 : 20,
	    n2 : 10
    })
    .end(function(err, res) {
      expect(res).to.have.status(200);  
      expect(Number(res.text)).to.equal(10);   
    });
  });
});

describe('request api/calculate/multi', function() {
  it('should return 10 when n1 is 5 and n2 is 2', function() {   
    chai.request('http://localhost:3000')
    .post('/api/calculate/multi')
    .send({
      n1 : 5,
	    n2 : 2
    })
    .end(function(err, res) {
      expect(res).to.have.status(200);  
      expect(Number(res.text)).to.equal(10);   
    });
  });
});

describe('request api/calculate/div', function() {
  it('should return 10 when n1 is 50 and n2 is 5', function() {   
    chai.request('http://localhost:3000')
    .post('/api/calculate/div')
    .send({
      n1 : 50,
	    n2 : 5
    })
    .end(function(err, res) {
      expect(res).to.have.status(200);  
      expect(Number(res.text)).to.equal(10);   
    });
  });
});