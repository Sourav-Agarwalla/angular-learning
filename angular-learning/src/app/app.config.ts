import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { taskReducer } from './reducers/task.reducers';
import { provideEffects } from '@ngrx/effects';
import { TaskEffects } from './effects/task.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState({ name: 'tasks', reducer: taskReducer }),
    provideEffects([TaskEffects]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
