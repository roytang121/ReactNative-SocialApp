import { ITabNavigatorState } from './TabNavigator.typings';
import { selectTab, Action } from './TabNavigator.actions';
import { TABS } from './TabNavigator.tabs';
import { handleActions } from 'redux-actions';

const initialState: ITabNavigatorState = {
  tabs: TABS,
  activeTab: TABS[0].id,
};

export const tabNavigatorReducer = handleActions<ITabNavigatorState, any>(
  {
    [Action.TAB_NAVIGATOR_SELECT]: (state, action) => ({ ...state, activeTab: action.payload }),
  },
  initialState,
);
