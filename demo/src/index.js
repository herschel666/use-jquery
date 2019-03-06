import React from 'react';
import ReactDOM from 'react-dom';
import useJQuery from '../../';

const App = () => {
  const [elemRef, jQueryCallback] = useJQuery();

  jQueryCallback($elem =>
    $elem
      .find('h1')
      .css('color', 'tomato')
      .text('Hello jQuery! 🤪')
  );

  return (
    <div className="app" ref={elemRef}>
      <h1 className="headline">Hello World!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
