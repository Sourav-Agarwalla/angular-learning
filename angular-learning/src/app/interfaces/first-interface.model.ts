export interface Task {
  id: number;
  title: string;
  description: string;
}

export interface AppState {
  tasks: Task[];
}

export interface CustomAction {
  type: string;
  task: Task;
  id: number;
}
