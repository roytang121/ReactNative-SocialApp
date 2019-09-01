import { createAction } from 'redux-actions';

export enum Action {
  TAB_NAVIGATOR_SELECT = 'TAB_NAVIGATOR_SELECT'
}

export const selectTab = createAction(Action.TAB_NAVIGATOR_SELECT);
