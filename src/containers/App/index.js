import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
  CssBaseline,
} from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createGlobalStyle } from 'styled-components';
import { generateReducers } from '../../reducers';
import Router from '../Router/index';
import theme from '../../style/theme';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
});

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__
    // eslint-disable-next-line no-underscore-dangle
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f,
];

export const GlobalStyle = createGlobalStyle` 
   *{
     box-sizing: border-box;
   }
   `;

const store = createStore(generateReducers(history), compose(...middlewares));

const App = () => (
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <Router history={history} />
        </MuiThemeProvider>
      </StylesProvider>
    </JssProvider>
  </Provider>
);

export default App;
