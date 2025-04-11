import { Component } from '@angular/core';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AppState, Task } from './interfaces/first-interface.model';
import { Store, StoreModule, StoreRootModule } from '@ngrx/store';
import { addTask, updateTask, deleteTask } from './actions/task.action';
import { taskReducer } from './reducers/task.reducers';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { selectTasks } from './selectors/task.selectors';

@Component({
  selector: 'app-root',
  imports: [FirstComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tasks$?: Observable<Task[]>;

  constructor(private store: Store<AppState>) {
    // this.store.select('tasks').subscribe((tasks) => (this.tasks = tasks ?? []));
    this.tasks$ = this.store.select(selectTasks);
  }

  addNewTask(taskLength?: number) {
    const newTask: Task = {
      id: (taskLength ?? 0) + 1,
      title: 'New Task',
      description: 'This is a new task.',
    };
    this.store.dispatch(addTask({ task: newTask }));
  }

  updateTask(task: Task) {
    const updatedTask: Task = {
      ...task,
      title: 'Updated Task',
      description: 'This task has been updated.',
    };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
}
