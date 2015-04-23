import 'script!jquery';
import 'ember';
import 'ember-mocha-adapter';

import {expect} from 'chai';

import Application from 'ember-loader?application!..';
const App = Application.create({
  rootElement: '#ember-testing'
});

App.setupForTesting();
App.injectTestHelpers();

describe('index', function() {

  afterEach(function() {
    App.reset();
  });

  it('visits index', function() {
    visit('/');
    andThen(function() {
      expect(find('.name-input')).to.have.length.of(1);
      expect(find('.hello').text()).to.equal('Hello world!');
    });
  });

  it('output reflects input', function() {
    visit('/');
    fillIn('.name-input input', 'me');
    andThen(function() {
      expect(find('.hello').text()).to.equal('Hello me!');
    });
  });

});
