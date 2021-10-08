import { mapData } from './map-data';
import config from '../config';
export const loadPages = async (slug = '') => {
  // recebemos o slug como string vazia, se houver um valor vamos limpar ela
  // tirando tudo o que não é letra, traço número ou underline.
  // e colocamos no lugar o nada ''
  const cleanSlug = slug ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  const url = `${config.url}/pages/${cleanSlug}`;

  const raw = await fetch(url);
  const json = await raw.json();
  const data = mapData(json);

  return data;
};
