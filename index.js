/**
 * @format
 */

import React from 'react';
import { Navigation } from 'react-native-navigation'
import App from './App'
import { name as appName } from './app.json'
import { configureStore } from './src/store'
import { Provider } from 'react-redux'
import { Banner } from './src/Banner'

Navigation.registerComponent('navigation.playground.ReduxScreen', () => (props) => (
  <Provider store={configureStore()}>
    <App {...props} />
  </Provider>
), () => appName)

// Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.playground.ReduxScreen'
      }
    }
  })
})
