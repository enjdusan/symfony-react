import * as React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [appState, setAppState] = React.useState({ showSwearing: false })

  return (
    <>
      <h1>Gwini{appState.showSwearing && <>... ty idiote!</>}</h1>
      <button type="button" onClick={() => setAppState({ showSwearing: true })}>Clickni na mě!</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
