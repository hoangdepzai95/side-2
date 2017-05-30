import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Router from './Router';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <Router />
    </Provider>
  );
}

export default App;
