import { Component } from '@angular/core';
import { ContentData } from './models/services.model';

import contentData from 'src/app/shared/mocks-data/content-data.json';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  pageContent: ContentData[] = contentData;

  getPageContent(name: string): ContentData | undefined {
    return this.pageContent.find((element) => {
      return name === element.name;
    });
  }
}
