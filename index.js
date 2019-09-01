/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json'
import Navigator from './src/navigation/Navigation'

AppRegistry.registerComponent(appName, () => Navigator)
