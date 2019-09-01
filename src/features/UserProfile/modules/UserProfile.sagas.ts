import { IUser } from '../../PostsFeed/modules/PostsFeed.types';
import NavigationService from '../../../services/NavigationService';
import { Action } from 'redux-actions';
import { call } from 'redux-saga/effects';

export function* onViewUser(action: Action<number>) {
  try {
    yield call(NavigationService.push, 'UserProfile', { userId: action.payload });
  } catch (error) {
    // TODO: notification error
  }
}
