import { connect } from 'react-redux';
import { ITabNavigatorProps, TabNavigator } from '../components/TabNavigator';
import { IRootState } from '../../../reducers/reducers';

const mapStateToProps = (state: IRootState): ITabNavigatorProps => ({
  tabs: state.tabNavigator.tabs,
});

export const TabNavigatorContainer = connect(mapStateToProps)(TabNavigator);
