import {
  booleanAttribute,
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  model,
  OnInit,
  output,
  Output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-second-component',
  imports: [],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.scss',
})
export class SecondComponentComponent implements OnInit {
  title = input('', {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    alias: 'name',
    transform: this.trimString,
  });
  isActive = input(false, { transform: booleanAttribute });
  label = computed(() => `Quote: ${this.title()}`);
  subTitle = signal<string>('');
  value = model(0);
  @Input() toggled?: boolean;
  @Output() toggledChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onToggleChange = output<string>();

  ngOnInit() {
    this.subTitle.set('This is the second component!');
    setTimeout(() => {
      this.value.update(prev => prev + 1);
      this.onToggleChange.emit('Learning Angular is fun!');
    }, 5000);
  }

  trimString(value: string): string {
    return value?.trim() ?? '';
  }
}
