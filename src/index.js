import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import Router from './Router';

import { Provider } from 'react-redux';
import configureStore from '../src/store/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore()}>
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </Provider>
);
