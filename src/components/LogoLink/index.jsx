import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from './../Heading/index';
import Link from 'next/link';
export const LogoLink = ({ text, srcImage = '', link }) => {
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container>
            {/* eslint-disable-next-line */}
            {srcImage ? <img src={srcImage} alt={text} /> : text}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {/* eslint-disable-next-line */}
        {srcImage ? <img src={srcImage} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImage: P.string,
  link: P.string.isRequired,
};
