import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent {
  items = ['What I do - 1', 'What I do - 2', 'What I do - 3', 'What I do - 4', 'What I do - 5'];

  panelOpenState = false;
}
