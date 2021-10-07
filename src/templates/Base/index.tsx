import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoToTop } from '../../components/GoToTop/index';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type BaseProps = {
  children: React.ReactNode;
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
  footerHTML: string;
};

export const Base = ({ links, logoData, footerHTML, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHTML} />
      </Styled.Container>
      <GoToTop />
    </>
  );
};
