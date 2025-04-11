import { createAction, props } from '@ngrx/store';
import { Task } from '../interfaces/first-interface.model';

/**
 * The first argument of createAction is the action type,
 * enclosed in square brackets to indicate it belongs to the Task feature.
 * The second argument, props, is used to define the payload of the action.
 */
export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const updateTask = createAction(
  '[Task] Update Task',
  props<{ task: Task }>()
);
export const deleteTask = createAction(
  '[Task] Delete Task',
  props<{ id: number }>()
);
