import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/first-interface.model';

export const selectTasksState = createFeatureSelector<AppState>('tasks');
export const selectTasks = createSelector(selectTasksState, state => state.tasks);
