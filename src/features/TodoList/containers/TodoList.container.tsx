import { ITodoListEvents, TodoList, ITodoListProps } from '../components/TodoList';
import { bindActionCreators } from 'redux';
import { fetchTodos, deleteItem } from '../module/TodoList.actions';
import { connect } from 'react-redux';
import { IRootState } from '../../../reducers/reducers';

const mapStateToProps = (state: IRootState): ITodoListProps => {
  return {
    todoItems: state.todo.items,
  };
};

const mapDispatchToProps = (dispatch): ITodoListEvents => {
  return {
    fetchData: bindActionCreators(fetchTodos, dispatch),
    deleteItem: bindActionCreators(deleteItem, dispatch),
  };
};

export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);
