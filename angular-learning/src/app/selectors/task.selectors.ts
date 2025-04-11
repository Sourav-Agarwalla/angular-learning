import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/first-interface.model';

export const selectTasksState = createFeatureSelector<AppState>('tasks');
export const selectTasks = createSelector(
  selectTasksState,
  (state) => state.tasks
);

// export const selectTaskById = (id: number) =>
//   createSelector(selectTasks, (tasks) => tasks.find((task) => task.id === id));
