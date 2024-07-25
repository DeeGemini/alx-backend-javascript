// api.test.js

const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
  const url = 'http://localhost:7865';

  it('should return status code 200', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', function(done) {
    request(url, function(error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  const url = 'http://localhost:7865/cart/';

  it('should return status code 200 when :id is a number', function(done) {
    request(url + '12', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when :id is not a number', function(done) {
    request(url + 'hello', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return status code 404 when :id is missing', function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
