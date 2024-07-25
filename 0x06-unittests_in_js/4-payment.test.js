// 4-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let stub;
  let spy;

  beforeEach(function() {
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20 and return 10', function() {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
