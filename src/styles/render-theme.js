import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import Home from '../templates/App';
import { render } from '@testing-library/react';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});

//Adicionando o que estiver dentro no renderTheme no ThemeProvider
export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
