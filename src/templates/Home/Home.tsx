import { Base } from '../Base';
import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumn/index';
import {
  GridContent,
  GridContentProps,
} from '../../components/GridContent/index';
import { GridText, GridTextProps } from '../../components/GridText/index';
import { GridImage, GridImageProps } from '../../components/GridImage/index';
import config from '../../config';
import Head from 'next/head';
import { theme } from '../../styles/theme';
import { PageNotFounded } from '../PageNotFounded';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};
export type SectionProps =
  | GridImageProps
  | GridTextProps
  | GridTwoColumnsProps
  | GridContentProps;

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
  if (!data || !data.length) {
    return <PageNotFounded />;
  }
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, link, srcImage, text } = menu;

  return (
    <Base
      links={links}
      footerHTML={footerHtml}
      logoData={{ text, link, srcImage }}
    >
      <Head>
        <title>
          {title} | {config.siteName}
        </title>

        <meta name="theme-color" content={theme.colors.primaryColor} />
        <meta
          name="description"
          content="um website utilizando o framework next.js com o react e consumindo API no strapi "
        />
      </Head>
      {sections.map((sections, index) => {
        const { component } = sections;
        // home e por ultimo o networking
        if (component === 'section.section-two-columns') {
          const key = `${slug}-${index}`;
          return (
            <GridTwoColumns key={key} {...(sections as GridTwoColumnsProps)} />
          );
        }
        // top 3 areas e salário logo depois de as 3 vertentes
        if (component === 'section.section-content') {
          const key = `${slug}-${index}`;
          return <GridContent key={key} {...(sections as GridContentProps)} />;
        }
        // galeria
        if (component === 'section.section-grid-image') {
          const key = `${slug}-${index}`;
          return <GridImage key={key} {...(sections as GridImageProps)} />;
        }
        //as 3 vertentes
        if (component === 'section.section-grid-text') {
          const key = `${slug}-${index}`;
          return <GridText key={key} {...(sections as GridTextProps)} />;
        }
      })}
    </Base>
  );
}

export default Home;
