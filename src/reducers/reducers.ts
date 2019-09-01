import { combineReducers } from 'redux';
import { todoReducer } from '../features/TodoList/module/TodoList.reducers';
import { ITodoState } from '../features/TodoList/module/TodoList.types';
import { ITabNavigatorState } from '../features/TabNavigator/modules/TabNavigator.typings';
import { tabNavigatorReducer } from '../features/TabNavigator/modules';
import { IPostsFeedState } from '../features/PostsFeed/modules/PostsFeed.types';
import { postsFeedReducer } from '../features/PostsFeed/modules';
import { IAlbumState } from '../features/Album/modules/Album.types';
import { albumReducer } from '../features/Album/modules';

export interface IRootState {
  todo: ITodoState;
  tabNavigator: ITabNavigatorState;
  posts: IPostsFeedState;
  albums: IAlbumState;
}

export const rootReducers = combineReducers<IRootState>({
  todo: todoReducer,
  tabNavigator: tabNavigatorReducer,
  posts: postsFeedReducer,
  albums: albumReducer,
});
