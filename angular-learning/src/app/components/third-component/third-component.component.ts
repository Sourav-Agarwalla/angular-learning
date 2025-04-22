import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { loadTask, addTask, updateTask, deleteTask } from '../../actions/task.action';
import { Task, AppState } from '../../interfaces/first-interface.model';
import { selectTasksState } from '../../selectors/task.selectors';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrl: './third-component.component.scss',
})
export class ThirdComponentComponent implements OnInit {
  tasks$?: Observable<Task[] | undefined>;

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.pipe(select(selectTasksState)).pipe(map(({ tasks }) => tasks));
  }

  ngOnInit(): void {
    this.store.dispatch(loadTask());
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
