import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss',
})
export class FirstComponentComponent {
  title = signal('angular-learning');
}
