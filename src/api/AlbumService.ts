// @ts-ignore missing @types/url
import { resolve } from 'url';
import { API_URL } from '../utils/constants';
import { IAlbum, IPhoto } from '../features/Album/modules/Album.types';

const albums = async (): Promise<IAlbum[]> => {
  const response = await fetch(resolve(API_URL, 'albums'), { method: 'GET' });
  return response.json();
};

const photos = async (): Promise<IPhoto[]> => {
  const response = await fetch(resolve(API_URL, 'photos'), { method: 'GET' });
  return response.json();
};

export const AlbumService = {
  albums,
  photos,
};
