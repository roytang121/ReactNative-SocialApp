import { createAction } from 'redux-actions';

export enum Action {
  USER_PROFILE_VIEW_USER = 'USER_PROFILE_VIEW_USER',
}

export const viewUser = createAction<number>(Action.USER_PROFILE_VIEW_USER);
