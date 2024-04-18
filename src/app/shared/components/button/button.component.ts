import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() customClassList?: string;
  @Input() isDisabledButton?: boolean;
  @Input() typeButton?: string;

  @Output() buttonClick = new EventEmitter();

  onClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}
