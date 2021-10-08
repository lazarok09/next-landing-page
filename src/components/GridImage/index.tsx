import * as Styled from './styles';
import { SectionBackground } from './../SectionBackground/index';
import { Heading } from './../Heading/index';
import { TextComponent } from './../TextComponent/index';

export type GridImageElementProps = {
  altText: string;
  srcImage: string;
};
export type GridImageProps = {
  background?: boolean;
  title: string;
  description: string;
  grid?: GridImageElementProps[];
  sectionId?: string;
  component?: string;
};
export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.altText}${el.srcImage}`}>
              <Styled.Image src={el.srcImage} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
