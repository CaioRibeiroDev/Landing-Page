import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { Children } from 'react';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render a text', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    //.firstChild pega sem a div.
    expect(container).toMatchSnapshot();
  });
});
