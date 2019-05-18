const chai = require('chai');
const except = chai.except;
const addition = require('./script.js');

describe('addition', () => {
  it('should add two nos', (done) => {
    addition.add(1,4).then((result) => {
      except(result).to.equal(5);
      done();
    });
  });
  it('should add two nos', (done) => {
    addition.add(10,40).then((result) => {
      except(result).to.equal(5);
      done();
    });
  });
  it('should add two nos', (done) => {
    addition.add(100,4).then((result) => {
      except(result).to.equal(104);
      done();
    });
  }); 
});
