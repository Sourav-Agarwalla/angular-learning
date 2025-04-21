import { createAction, createActionGroup, props } from '@ngrx/store';
import { Task } from '../interfaces/first-interface.model';

export enum TaskActionsTypes {
  LoadTask = '[Task] Load Task',
  LoadTaskSuccess = '[Task] Load Task Success',
  AddTask = '[Task] Add Task',
  UpdateTask = '[Task] Update Task',
  DeleteTask = '[Task] Delete Task',
}

/**
 * The first argument of createAction is the action type,
 * enclosed in square brackets to indicate it belongs to the Task feature.
 * The second argument, props, is used to define the payload of the action.
 */
export const loadTask = createAction(TaskActionsTypes.LoadTask);
export const loadTaskSuccess = createAction(
  TaskActionsTypes.LoadTaskSuccess,
  props<{ tasks: Task[] }>()
);
export const addTask = createAction(
  TaskActionsTypes.AddTask,
  props<{ task: Task }>()
);
export const updateTask = createAction(
  TaskActionsTypes.UpdateTask,
  props<{ task: Task }>()
);
export const deleteTask = createAction(
  TaskActionsTypes.DeleteTask,
  props<{ id: number }>()
);

/**
 * ALTERNATE WAY TO CREATE ACTIONS
 * Represents a group of actions related to tasks.
 * @source Tasks
 * @events
 * - `LoadTask`: Loads tasks.
 * - `AddTask`: Adds a task.
 * - `UpdateTask`: Updates a task.
 * - `DeleteTask`: Deletes a task.
 */
export const TaskActions = createActionGroup({
  source: 'Tasks',
  events: {
    [TaskActionsTypes.LoadTask]: props<{ tasks: Task[] }>(),
    [TaskActionsTypes.AddTask]: props<{ task: Task }>(),
    [TaskActionsTypes.UpdateTask]: props<{ task: Task }>(),
    [TaskActionsTypes.DeleteTask]: props<{ id: number }>(),
  },
});
