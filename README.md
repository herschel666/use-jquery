# `use-jquery`

> React hook for bringing the jQuery magic back into your web app. 🤠

## Installation

```sh
yarn add use-jquery react react-dom jquery
```

_Beware that you need `React@16.8` to be able to leverage the powers of React hooks._

## Usage

The `useJQuery` hook will return a tupel: the first element is the `ref` of the outer element of the
component and the second element a function, that takes your DOM manipulation callback.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import useJQuery from 'use-jquery';

const App = () => {
  const [elemRef, jQueryCallback] = useJQuery();

  jQueryCallback($elem => $elem.find('h1').css('color', 'tomato'));

  return (
    <div ref={elemRef}>
      <h1>Hello World!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

By default `use-jquery` uses the `useLayoutEffect` hook internally to enable you to get hold of the
DOM in a synchronous manner. You can switch to the `useEffect` hook if you pass in `true` as an
argument to the `useJQuery` hook.

```javascript
const [elemRef, jQueryCallback] = useJQuery(true);
```

[Read more about the timing of effects.](https://reactjs.org/docs/hooks-reference.html#timing-of-effects)

## API

### `useJQuery([defer])`

`useJQuery` returns a tupel: the first element is the `ref`, the second element is a function that
takes your DOM manipulation callback.

#### `defer`

`boolean` value that makes `useJQuery` use the `useEffect` hook internally instead of the `useLayoutEffect` hook.

## License

MIT @ [Emanuel Kluge](https://twitter.com/Herschel_R)
