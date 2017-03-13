'use strict';

var expect = require('chai').expect;
var Pazaak = require('../index');

describe('#pazaak', function() {
  it('should return a observable', function() {
    const pazaak = Pazaak.pazaak;
    var observable = pazaak(observer => {});
    expect(observable.subscribe).to.be.a('function');
  })
})
