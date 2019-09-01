import { NavigationActions, NavigationParams, StackActions } from 'react-navigation';

let _navigator;

const setTopLevelNavigator = (navigatorRef: any) => {
  _navigator = navigatorRef;
};

const navigate = (routeName: string, params: NavigationParams) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

const back = () => {
  _navigator.dispatch(
    NavigationActions.back(),
  );
};

const push = (routeName: string, params: NavigationParams) => {
  _navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    })
  );
};

export default {
  back,
  navigate,
  push,
  setTopLevelNavigator,
};
