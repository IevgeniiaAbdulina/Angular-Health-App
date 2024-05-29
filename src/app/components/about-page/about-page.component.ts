import { Component, OnInit } from '@angular/core';
import { ContentDataService } from 'src/app/services/content-data.service';

interface ContentDataResponse {
  pageName: string,
  content: AboutMeSection,
  bio: BiographySection
}

interface AboutMeSection {
  title: string,
  subtitle: {
    header:string,
    body: string
  },
  checkboxes: {
    box1: string,
    box2: string
  },
  body: string
}

interface BiographySection {
  title: string,
  body: {
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    p5: string
  }
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  fileContent: ContentDataResponse | undefined

  constructor(private contentDataService: ContentDataService){}

  ngOnInit(): void {
    this.contentDataService.getAboutPageContent().subscribe(data => {
        this.fileContent = data as ContentDataResponse;
      }
    );
  }
}
