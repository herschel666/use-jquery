const React = require('react');
const { render, unmountComponentAtNode } = require('react-dom');
const PropTypes = require('prop-types');
const useJQuery = require('..');

const mountNodeId = 'test-node';

const mountNode = () => document.getElementById(mountNodeId);

const App = ({ className, defer }) => {
  const [elemRef, jQueryCallback] = useJQuery(defer);
  const props = { ref: elemRef };

  jQueryCallback($elem => $elem.addClass(className));

  return React.createElement('p', props, 'Test');
};
App.propTypes = {
  className: PropTypes.string.isRequired,
  defer: PropTypes.bool,
};

describe('useJQuery', () => {
  beforeAll(() => {
    document.body.innerHTML = `<div id="${mountNodeId}"></div>`;
  });

  describe('synchronous', () => {
    const className = 'synchronous-test';

    beforeEach(() => {
      render(React.createElement(App, { className }), mountNode());
    });

    afterEach(() => unmountComponentAtNode(mountNode()));

    it('should do jQuery magic', () => {
      const paragraph = document.querySelector('p');

      expect(paragraph.className).toBe(className);
    });
  });

  describe('deferred', () => {
    const className = 'deferred-test';

    beforeEach(() => {
      const defer = true;
      render(React.createElement(App, { defer, className }), mountNode());
    });

    afterEach(() => unmountComponentAtNode(mountNode()));

    it('should do jQuery magic', done =>
      setTimeout(() => {
        const paragraph = document.querySelector('p');

        expect(paragraph.className).toBe(className);
        done();
      }, 100));
  });
});
