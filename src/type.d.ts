export interface Task {
  title: string,
  status: boolean,
  id: string,
}

export interface TodoState {
  tasks: Task[],
  loading: boolean,
}

export interface TodoStateMutation extends TodoState {
  todo: TodoState,
}