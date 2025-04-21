import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from '../interfaces/first-interface.model';
import {
  addTask,
  deleteTask,
  loadTaskSuccess,
  updateTask,
} from '../actions/task.action';

export const initialState: AppState = {
  tasks: [],
};

/**
 * We defined the initial state of our application with an empty array of tasks.
 * The taskReducer function is a pure function that receives the current state
 * and an action as arguments and returns a new state based on the action type
 */
export const taskReducer = createReducer(
  initialState,
  on(loadTaskSuccess, (state, { tasks }) => {
    return { ...state, tasks: [...(tasks ?? [])] };
  }),
  on(addTask, (state, { task }) => {
    return { ...state, tasks: [...(state.tasks ?? []), task] };
  }),
  on(updateTask, (state, { task }) => {
    const updatedTask = state?.tasks?.map((t) =>
      t?.id === task?.id ? task : t
    );
    return { ...state, tasks: [...(updatedTask ?? [])] };
  }),
  on(deleteTask, (state, { id }) => {
    const updatedTask = state?.tasks?.filter((task) => task?.id !== id);
    return { ...state, tasks: [...(updatedTask ?? [])] };
  })
);
