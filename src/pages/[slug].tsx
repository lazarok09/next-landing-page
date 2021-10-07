import Home, { HomeProps } from '../templates/Home/Home';
import { loadPages } from '../api/load-pages';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Page({ data }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await loadPages()).map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  let data = null;

  try {
    data = await loadPages(context.params.slug as string);
  } catch (e) {
    data = null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
