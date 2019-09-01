import React from 'react';
import { FlatList, Text, ListRenderItem, View, StyleSheet } from 'react-native';
import { ITodoItem } from '../module/TodoList.types';
import { TodoRowItem } from './Todo';
import { Flex } from '../../../utils/flex';
import { Separator } from '../../../components/Separator/Separator';

export interface ITodoListProps {
  todoItems: ITodoItem[];
}

export interface ITodoListEvents {
  fetchData: () => void;
  deleteItem: (id: number) => void;
}

export interface IRow {
  data: ITodoItem;
  backgroundColor: string;
}

export class TodoList extends React.PureComponent<ITodoListProps & ITodoListEvents> {
  componentDidMount() {
    this.props.fetchData();
  }

  get data(): IRow[] {
    return this.props.todoItems.map((todo, index): IRow => ({
      data: todo,
      backgroundColor: this.getRandomColor(index),
    }));
  }

  keyForRow = (item: IRow, index: number): string => {
    return `todo-item-${item.data.id}-${item.data.userId}`;
  }

  onDeleteTodoItem = (id: number) => {
    this.props.deleteItem(id);
  }

  renderRowForItem: ListRenderItem<IRow> = ({ item }) => {
    const todo: ITodoItem = item.data;
    return (
      <View style={styles.todoRow}>
        <TodoRowItem item={todo} onDeleteItem={this.onDeleteTodoItem} />
        <Separator full={true} />
      </View>
    );
  }

  getRandomColor(index: number): string {
    const colorValues = ['#C1C1C1', '#F1FFFA', '#D5C7BC', '#7A9E9F', '#4F6367'];
    return colorValues[index % colorValues.length];
  }

  render () {
    return (
      <FlatList
        keyExtractor={this.keyForRow}
        data={this.data}
        renderItem={this.renderRowForItem} />
    );
  }
}

const styles = StyleSheet.create({
  todoRow: {
    ...Flex.column,
    height: 65,
    alignItems: 'stretch'
  }
});
