import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { ITodoItem } from '../module/TodoList.types';
import { Flex } from '../../../utils/flex';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../utils/colors';

export enum ActionMode {
  DONE = 'DONE',
  DELETE = 'DELETE',
  UNDONE = 'UNDONE',
}

export interface IProps {
  item: ITodoItem;
}

export interface IState {
  contentOffsetX: number;
  done: boolean;
  actionMode: ActionMode;
}

export interface IEvents {
  onDeleteItem: (id: number) => void;
}

const CONTENT_WIDTH: number = Dimensions.get('window').width;

export class TodoRowItem extends PureComponent<IProps & IEvents, IState> {
  state: Readonly<IState> = {
    contentOffsetX: 0,
    done: false,
    actionMode: ActionMode.DONE,
  };

  onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX: number = event.nativeEvent.contentOffset.x;
    if (offsetX > 0) {
      this.state.actionMode === ActionMode.DELETE ||
        this.setState({ actionMode: ActionMode.DELETE });

    } else {
      (this.state.actionMode === ActionMode.DONE && !this.state.done) ||
      (this.state.actionMode === ActionMode.UNDONE && this.state.done) ||
        this.setState({ actionMode: this.state.done ? ActionMode.UNDONE : ActionMode.DONE });
    }
  }

  onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX: number = event.nativeEvent.contentOffset.x;
    if (offsetX < -60) {
      this.setState({ done: !this.state.done });
    } else if (offsetX > 60) {
      this.props.onDeleteItem(this.props.item.id);
    }
  }

  renderDoneBackdrop = () => (
    <View style={{ ...styles.backdropItem, backgroundColor: 'green' }}>
      <Ionicons name="ios-checkmark" size={30} color={'white'} />            
    </View>
  )

  renderUnDoneBackdrop = () => (
    <View style={{ ...styles.backdropItem, backgroundColor: '#c99c20' }}>
      <Ionicons name="ios-square-outline" size={30} color={'white'} />            
    </View>
  )

  renderDeleteBackdrop = () => (
    <View style={{ ...styles.backdropItem, backgroundColor: 'red' }}>
      <Ionicons name="ios-trash" size={30} color={'white'} style={{ alignSelf: 'flex-end' }} />            
    </View>
  )

  renderBackDrop = () => {
    switch (this.state.actionMode) {
      case ActionMode.DONE:
        return this.renderDoneBackdrop();
      case ActionMode.DELETE:
        return this.renderDeleteBackdrop();
      case ActionMode.UNDONE:
        return this.renderUnDoneBackdrop();
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.backdrop}>
          {this.renderBackDrop()}
        </View>
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          onScroll={this.onScroll}
          onScrollEndDrag={this.onScrollEnd}>
          <View style={styles.content}>
            <Text style={this.state.done ? styles.todoDone : null}>{this.props.item.title}</Text>
            <Text>{this.state.done}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: CONTENT_WIDTH,
    backgroundColor: 'green',
    flex: 1,
  },
  scrollView: {
    width: '100%',
  },
  content: {
    ...Flex.column, 
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    width: CONTENT_WIDTH,
  },
  backdrop: {
    ...Flex.row, 
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'stretch',
  },
  backdropItem: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  todoDone: {
    textDecorationLine: 'line-through',
    color: Colors.textMeta,
  }
});    
