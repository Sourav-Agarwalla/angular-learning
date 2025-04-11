import { Action, createReducer, on } from '@ngrx/store';
import {
  AppState,
  CustomAction,
  Task,
} from '../interfaces/first-interface.model';
import { addTask, deleteTask, updateTask } from '../actions/task.action';

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
  on(addTask, (state, { task }) => {
    return { ...state, tasks: [...state.tasks, task] };
  })
);
