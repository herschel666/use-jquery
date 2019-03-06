const { useRef, useEffect, useLayoutEffect } = require('react');
const $ = require('jquery');

const useJQuery = defer => {
  let fn = () => {};
  const deferEffect = typeof defer === 'boolean' ? defer : false;
  const useEffectFn = deferEffect ? useEffect : useLayoutEffect;
  const elem = useRef(null);
  const callback = effect => {
    fn = effect;
  };

  useEffectFn(() => {
    if (elem.current) {
      fn($(elem.current));
    }
  }, [elem.current, fn]);

  return [elem, callback];
};

module.exports = useJQuery;
useJQuery.default = useJQuery;
