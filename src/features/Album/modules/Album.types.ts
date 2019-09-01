export interface IAlbumState {
  albums: IAlbum[];
  fetching: boolean;
}

export interface IAlbum {
  userId: number;
  id: number;
  title: string;
  photos: IPhoto[];
}

export interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
