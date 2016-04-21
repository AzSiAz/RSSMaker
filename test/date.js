const madokamidate = require('../server/utils/madokamidate');
const moment = require('moment');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Parse Date', function () {
  it('2016-04-12 00:58 should be a valid date', function () {
    expect(moment.utc('2016-04-12 00:58', 'YYYY-MM-DD HH-mm').isValid()).to.be.true;
  });
  
  it('Should return a date 13 hours ago', function () {
    var date = madokamidate("13 hours ago").toUTCString();
    var equal = moment.utc().subtract(13, 'hours').toDate().toUTCString();
    expect(date).to.equal(equal);
  })
  
  it('Should work with real date from Madokami', function () {
    var date = madokamidate("2016-04-12 00:58");
    expect(date.toUTCString()).to.equal("Tue, 12 Apr 2016 00:58:00 GMT");
  })
})