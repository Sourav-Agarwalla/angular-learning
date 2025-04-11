import { Component, signal } from '@angular/core';
import { SecondComponentComponent } from '../second-component/second-component.component';

@Component({
  selector: 'app-first-component',
  imports: [SecondComponentComponent],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss',
})
export class FirstComponentComponent {
  title = signal('angular-learning  ');
  value = signal(10);
  value2?: boolean;
}
