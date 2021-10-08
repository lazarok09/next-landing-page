/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from '../components/MenuLink';
import { PageData } from '../templates/Home/Home';

// TS: menu ={} será tipado como any pois os dados vem do strapi e são renomeados
export const mapMenu = (menu = {} as any): PageData['menu'] => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    menu: links = [],
  } = menu;
  const srcImage = menu.logo && menu.logo.url ? menu.logo.url : '';

  return {
    newTab,
    text,
    link,
    srcImage,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = [] as any[]): MenuLinkProps[] => {
  return links.map((item: any): MenuLinkProps => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
