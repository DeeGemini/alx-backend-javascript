// 6-payment_token.test.js

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should return a resolved promise with the correct data when success is true', function(done) {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.have.property('data', 'Successful response from the API');
      done();
    }).catch(done);
  });

  it('should not return anything when success is false', function() {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
  });
});
