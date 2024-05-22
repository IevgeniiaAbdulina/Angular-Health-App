import { Component } from '@angular/core';
import { ServiceItem } from './models/services.model';

import { mockServices } from './mock-data/services.mocks';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  servicesList: ServiceItem[] = mockServices;
}
