import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import GeoLocation from './components/GeoLocation';
import Router from './Router';

const store = configureStore();

const App = () => {
  return(
    <div>
      <Provider store={store}>
        <GeoLocation />
        <Router />
      </Provider>
    </div>
  );
}

export default App;
