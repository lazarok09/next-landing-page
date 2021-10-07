import linksMock from '../../components/NavLinks/mock';

import mockGrid from '../../components/GridText/mock';
import { GridText } from '../../components/GridText';
import { BaseProps } from '.';

export const mockBase = {
  children: (
    <>
      <GridText {...mockGrid} background />
      <GridText {...mockGrid} />
      <GridText {...mockGrid} background />
      <GridText {...mockGrid} />
      <GridText {...mockGrid} background />
      <GridText {...mockGrid} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHTML: `<p> teste de footer </p>`,
} as BaseProps;
export default mockBase;
