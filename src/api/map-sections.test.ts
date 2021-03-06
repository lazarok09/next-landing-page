import mapImageGridMock from './api-data-mock/mapImageGridMock';
import mapSectionContentMock from './api-data-mock/mapSectionContentMock';
import mapTextGridMock from './api-data-mock/mapTextGridMock';
import mapSectionTwoColumnsMock from './api-data-mock/mapSectionTwoColumnsMock';

import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './data.json';
describe('map sections', () => {
  it('should map predefined value if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });
  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });
  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);
    const withNoComponent = mapSections([{}]);

    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });
  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns', () => {
    const data = mapSectionTwoColumns();
    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImage).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });
  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns(mapSectionTwoColumnsMock);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('Desenvolver Software ?? a nova onda do imperador');
    expect(data.text).toBe(
      'Na computa????o, o desenvolvimento de software ?? o ato de elaborar e  implementar um sistema computacional, isto ??, transformar a            necessidade de um utilizador ou de um mercado em um produto de software[1]. Em outras palavras, ?? atrav??s da programa????o dar\nvida a uma ideia.',
    );
    expect(data.srcImage).toBe(
      'https://res.cloudinary.com/lazarok09/image/upload/v1630418192/javascript_efaaf593b4.svg',
    );
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
  });

  it('should map section content with data', () => {
    const section = mapSectionContent();
    expect(section.component).toBe('');
    expect(section.title).toBe('');
    expect(section.html).toBe('');
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('');
  });
  it('should map section content with no data', () => {
    const section = mapSectionContent(mapSectionContentMock);

    expect(section.component).toBe('section.section-content');
    expect(section.title).toBe('TOP 3 ??reas');
    expect(section.html).toBe(
      '<p>Front End ?? o desenvolvedor de interface, aquilo que o usu??rio final enxerga no dia a dia. Ele pode desenvolver interfaces para internet (web) ou para dispositivos m??veis (mobile).</p><p>Back End, como o pr??prio nome sugere, vem da ideia do que tem por tr??s de uma aplica????o.</p><p>Desenvolvedor Mobile ?? a pessoa com atividades ligadas a estrutura????o e cria????o de interfaces, aplicativos e dashboards para dispositivos m??veis.</p>',
    );
    expect(section.background).toBe(false);
    expect(section.sectionId).toBe('intro');
  });
  it('should map grid text with data', () => {
    const gridtext = mapTextGrid(mapTextGridMock);
    expect(gridtext.component).toBe('section.section-grid-text');
    expect(gridtext.title).toBe('as 3 vertentes');
    expect(gridtext.background).toBe(true);
    expect(gridtext.sectionId).toBe('toptres');
    expect(gridtext.description).toBe(
      'Abaixo uma descri????o de cada fun????o do profissional de TI',
    );
    expect(gridtext.grid[0].title).toBe('Front-end');
    expect(gridtext.grid[0].description).toBe(
      'Podemos classificar como a parte visual de um site, aquilo que conseguimos interagir. Quem trabalha com Front End ?? respons??vel por desenvolver por meio de c??digo uma interface gr??fica, normalmente com as tecnologias base da Web (HTML, CSS e JavaScript).',
    );
  });
  it('should map grid text with out data', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    // always will return the component
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
  it('should map grid image with  data', () => {
    const data = mapImageGrid(mapImageGridMock);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('galeria');
    expect(data.title).toBe('Galeria');
    expect(data.description).toBe(
      'Voc?? pode conferir abaixo um servi??o na internet que prov?? imagens aleat??rias. E isso ?? incr??vel, pois ?? um software livre e gr??tis para quem quiser utilizar! unsplash website\n\n',
    );
    expect(data.grid[0].srcImage).toBe(
      'https://res.cloudinary.com/lazarok09/image/upload/v1630419125/360x360_r_5_835f4af781.jpg',
    );
    expect(data.grid[0].altText).toBe(
      'uma cadeira no meio de um fundo branco e piso de madeira',
    );
  });
  it('should map grid image with out data', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
});
