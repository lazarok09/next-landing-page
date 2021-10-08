import { GridImageProps, GridImageElementProps } from '../components/GridImage';
import { GridTextProps, GridTextElementProps } from '../components/GridText';
import { GridContentProps } from '../components/GridContent';
import { GridTwoColumnsProps } from '../components/GridTwoColumn';
import { SectionProps } from '../templates/Home/Home';
/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapSections = (sections = []): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
    return section;
  });
};
export const mapSectionTwoColumns = (
  section = {} as any,
): GridTwoColumnsProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImage = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImage,
    background,
    sectionId,
  };
};
export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};
export const mapTextGrid = (section = {} as any): GridTextProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text: any): GridTextElementProps => {
      const { title = '', description = '' } = text;
      return { title, description };
    }),
  };
};
export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;
  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img: any): GridImageElementProps => {
      const { image: { url: srcImage, alternativeText: altText } = '' } = img;
      return { srcImage, altText };
    }),
  };
};