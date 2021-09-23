import P from 'prop-types';
import { loadPages } from '../api/load-pages';
import Home from './../templates/Home/Home';

export default function Index({ data = null }) {
  return <Home data={data} />;
}
export const getStaticProps = async (context) => {
  let data = null;

  try {
    data = await loadPages('landing-page');
  } catch (err) {
    console.warn(err.message);
  }
  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
};

Index.propTypes = {
  data: P.array,
};
