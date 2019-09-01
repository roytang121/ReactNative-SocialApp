import React from 'react';
import { 
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  NavigationScreenProps,
  NavigationParams,
  NavigationState,
} from 'react-navigation';
import { Provider } from 'react-redux';
import { reduxStore } from '../store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PostsFeedScreen } from '../components/App/PostsFeedScreen';
import { PostDetailScreen } from '../components/App/PostDetailScreen';
import NavigationService from '../services/NavigationService';
import { UserProfileScreen } from '../components/App/UserProfileScreen';
import { TodoScreen } from '../components/App/TodoScreen';

export type INavigationProps = NavigationScreenProps<NavigationState, NavigationParams>;

const HomeStack = createStackNavigator({
  Home: {
    screen: PostsFeedScreen,
    navigationOptions: () => ({
      title: 'Home'
    })
  },
  Post: {
    screen: PostDetailScreen,
    navigationOptions: () => ({
      title: 'Post'
    })
  },
  UserProfile: {
    screen: UserProfileScreen,
  }
});

const TodoStack = createStackNavigator({
  Todo: {
    screen: TodoScreen,
    navigationOptions: () => ({
      title: 'Todo'
    })
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Todo: TodoStack,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Todo') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    })
  });

export const AppContainer = createAppContainer(TabNavigator);

export default class Navigator extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <AppContainer ref={navigationRef => NavigationService.setTopLevelNavigator(navigationRef)} />
      </Provider>
    );
  }
}
