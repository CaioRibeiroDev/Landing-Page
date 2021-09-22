import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLink } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLink />', () => {
  it('should render', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render', () => {
    renderTheme(<NavLink />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getByText(/link10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.font.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLink links={mock} />);
    expect(container).toMatchSnapshot();
  });
});
