import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() customClassList?: string;
  // @Input() customAttribute = '';
  // @Input() customColor = '';
  @Input() isDisabledButton?: boolean;

  @Output() buttonClick = new EventEmitter();

  onClick(event: Event): void {
    this.buttonClick.emit(event);
    console.log(event)
  }
}
