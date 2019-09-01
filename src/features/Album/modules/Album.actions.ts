import { createAction } from 'redux-actions';

export enum Action {
  ALBUM_FETCH_ALBUMS = 'ALBUM_FETCH_ALBUMS',
  ALBUM_FETCH_ALBUMS_SUCCESS = 'ALBUM_FETCH_ALBUMS_SUCCESS',
}

export const fetchAlbums = createAction(Action.ALBUM_FETCH_ALBUMS);

export const fetchAlbumsSuccess = createAction(Action.ALBUM_FETCH_ALBUMS_SUCCESS);
