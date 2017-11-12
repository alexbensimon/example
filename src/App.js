// @flow

import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxLogger from 'redux-logger';

import logo from './assets/logo.svg';
import './style/App.css';
import reducers from './reducers';

import Form from './components/Form';
import Display from './components/Display';

const store = createStore(reducers, {}, applyMiddleware(ReduxLogger));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to App Example</h1>
        </header>
        <Form />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
