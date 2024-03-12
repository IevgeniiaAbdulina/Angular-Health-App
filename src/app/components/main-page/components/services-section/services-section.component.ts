import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent {
  items = [
    'Zaburzenia osobowości',
    'Zaburzenia snu',
    'Uzależnienia'
  ];

  panelOpenState = false;
}
