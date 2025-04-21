import { Injectable, inject } from '@angular/core';
import { map, exhaustMap, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTask, loadTaskSuccess } from '../actions/task.action';
import { Task } from '../interfaces/first-interface.model';

@Injectable()
export class TaskEffects {
  private actions$ = inject(Actions);

  /**
   * Effect to handle the loading of tasks.
   *
   * This effect listens for the `loadTask` action and triggers an API call or
   * a mock data fetch to retrieve a list of tasks. Once the tasks are successfully
   * retrieved, it dispatches the `loadTaskSuccess` action with the loaded tasks.
   *
   * @returns An observable stream that listens for `loadTask` actions and emits
   *          `loadTaskSuccess` actions with the fetched tasks.
   */
  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTask),
      exhaustMap(() =>
        of([
          {
            id: 1,
            title: 'New Task',
            description: 'This is a new task.',
          },
        ]).pipe(map((task: Task[]) => loadTaskSuccess({ tasks: [...task] })))
      )
    );
  });
}
