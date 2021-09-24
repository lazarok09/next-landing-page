import P from 'prop-types';
import { Base } from '../Base';
import { PageNotFounded } from './../../components/PageNotFounded/index';
import { GridTwoColumns } from './../../components/GridTwoColumn/index';
import { GridContent } from './../../components/GridContent/index';
import { GridText } from './../../components/GridText/index';
import { GridImage } from './../../components/GridImage/index';
import config from '../../config';
import Head from 'next/head';
import { theme } from './../../styles/theme';

function Home({ data }) {
  if (!data || !data.length) {
    return <PageNotFounded />;
  }
  const { footerHtml, menu, sections, slug, title } = data[0];
  const { link, links, srcImage, text } = menu;

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
          return <GridTwoColumns key={key} {...sections} />;
        }
        // top 3 areas e salário logo depois de as 3 vertentes
        if (component === 'section.section-content') {
          const key = `${slug}-${index}`;
          return <GridContent key={key} {...sections} />;
        }
        // galeria
        if (component === 'section.section-grid-image') {
          const key = `${slug}-${index}`;
          return <GridImage key={key} {...sections} />;
        }
        //as 3 vertentes
        if (component === 'section.section-grid-text') {
          const key = `${slug}-${index}`;
          return <GridText key={key} {...sections} />;
        }
      })}
    </Base>
  );
}

export default Home;

Home.propTypes = {
  data: P.array,
};
