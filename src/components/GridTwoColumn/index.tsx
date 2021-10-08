import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground/index';
import { Heading } from '../Heading/index';
import { TextComponent } from '../TextComponent/index';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  srcImage: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};
export const GridTwoColumns = ({
  title,
  text,
  srcImage,
  background = false,
  sectionId = '',
}: GridTwoColumnsProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading colorDark={!background} uppercase as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={srcImage} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};
