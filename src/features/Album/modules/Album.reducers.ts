import { IAlbumState } from './Album.types';
import { handleActions } from 'redux-actions';
import { Action } from './Album.actions';

export const initialState: IAlbumState = {
  albums: [],
  fetching: false,
};

export const reducer = handleActions<IAlbumState, any>(
  {
    [Action.ALBUM_FETCH_ALBUMS]: (state: IAlbumState) =>
      ({ ...state, fetching: true }),
  
    [Action.ALBUM_FETCH_ALBUMS_SUCCESS]: (state: IAlbumState, action) =>
      ({ ...state, fetching: false, albums: action.payload })
  },
  initialState,
);
