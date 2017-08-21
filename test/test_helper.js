import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk' 
import promise from 'redux-promise';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

// Set up testing enviroment to run like a browser in the command line
// windw -> global in node
global.document = jsdom.jsdom('<!doctype html><html><body></body</html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

const createStoreWithMiddleware = applyMiddleware(
  promise, thunk
)(createStore);

// Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStoreWithMiddleware(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
);

  return $(ReactDOM.findDOMNode(componentInstance));
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);
}


// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect }