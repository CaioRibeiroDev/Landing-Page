import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';

export const NavLink = ({ links = [] }) => {
  return (
    <Styled.Container>
      {links.map((l) => (
        <MenuLink key={l.link} {...l} />
      ))}
    </Styled.Container>
  );
};

NavLink.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
