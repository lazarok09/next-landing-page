import * as Styled from './styles';
import { MenuLink, MenuLinkProps } from '../MenuLink/index';

export type NavLinkProps = {
  links?: Array<MenuLinkProps>;
};

export const NavLinks = ({ links = [] }: NavLinkProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};
