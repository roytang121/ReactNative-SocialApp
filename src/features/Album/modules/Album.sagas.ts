import { IAlbum, IPhoto } from './Album.types';
import { call, put } from 'redux-saga/effects';
import { AlbumService } from '../../../api/AlbumService';
import { cloneDeep } from 'lodash';
import { AlbumActions } from '.';

export function* onFetchAlbum() {
  const albums: IAlbum[] = yield call(AlbumService.albums);
  const photos: IPhoto[] = yield call(AlbumService.photos);

  const mappedAlbums = albums.map(album => {
    const albumWithPhotos: IAlbum = cloneDeep(album);
    albumWithPhotos.photos = photos.filter(photo => photo.albumId === albumWithPhotos.id);
    return albumWithPhotos;
  });

  yield put(AlbumActions.fetchAlbumsSuccess(mappedAlbums));
}
