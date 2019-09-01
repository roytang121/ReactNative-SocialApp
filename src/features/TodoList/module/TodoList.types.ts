export interface ITodoState {
  items: ITodoItem[];
  fetching: boolean;
}

export interface ITodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
