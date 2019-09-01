import React, { Component } from 'react';
import { INavigationProps } from '../../navigation/Navigation';
import { Screen } from './Screen';
import { TodoList } from '../../features/TodoList/module';

export class TodoScreen extends Component<INavigationProps> {
  
  render() {
    return (
      <Screen>
        <TodoList />
      </Screen>
    );
  }
}
