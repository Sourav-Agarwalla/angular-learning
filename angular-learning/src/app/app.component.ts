import { Component } from '@angular/core';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { CommonModule } from '@angular/common';
import { ThirdComponentComponent } from './components/third-component/third-component.component';

@Component({
  selector: 'app-root',
  imports: [FirstComponentComponent, CommonModule, ThirdComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
