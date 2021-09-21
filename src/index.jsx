import React from 'react';
import ReactDOM from 'react-dom';
import Home from './templates/App';

//Tema dos itens como: font, cor etc.
import { theme } from './styles/theme';
//Nos da acesso as informações dos components filhos dentro do themeprovider
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
