import { takeLatest, all } from 'redux-saga/effects';
import { TodoActions, TodoSagas } from './features/TodoList/module';
import { PostsFeedActions, PostsFeedSagas } from './features/PostsFeed/modules';
import { UserProfileActions, UserProfileSagas } from './features/UserProfile/modules';
import { AlbumActions, AlbumSagas } from './features/Album/modules';

function* watchFetchTodo() {
  yield takeLatest(TodoActions.fetchTodos, TodoSagas.onFetchTodo);
}

function* watchFetchPosts() {
  yield takeLatest(PostsFeedActions.fetchPostsFeed, PostsFeedSagas.onFetchPosts);
}

function* watchSelectPost() {
  yield takeLatest(PostsFeedActions.selectPost, PostsFeedSagas.onSelectPost);
}

function* watchViewUser() {
  yield takeLatest(UserProfileActions.viewUser, UserProfileSagas.onViewUser);
}

function* watchFetchAlbums() {
  yield takeLatest(AlbumActions.fetchAlbums, AlbumSagas.onFetchAlbum);
}

function* watchDeleteTodoItem() {
  yield takeLatest(TodoActions.deleteItem, TodoSagas.onDeleteItem);
}

export default function* rootSaga() {
  yield all([
    watchFetchTodo(),
    watchFetchPosts(),
    watchSelectPost(),
    watchViewUser(),
    watchFetchAlbums(),
    watchDeleteTodoItem(),
  ]);
}
