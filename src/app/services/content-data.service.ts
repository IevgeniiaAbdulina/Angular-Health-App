import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentDataService {
  aboutPageContentURL = 'https://firebasestorage.googleapis.com/v0/b/mental-health-wroclaw.appspot.com/o/page-content%2Fabout%2Fabout-page-data.json?alt=media&token=5dbd4dd9-cf21-40f7-9742-8e9dfc3a29c0';
  servicesPageContentURL = 'https://firebasestorage.googleapis.com/v0/b/mental-health-wroclaw.appspot.com/o/page-content%2Fservices%2Fservices-page-data.json?alt=media&token=9ceab07c-dfa7-4ad4-802c-cd9e44df9694';

  constructor(private http: HttpClient) { }

  getAboutPageContent(): Observable<Object> {
    return this.http.get(this.aboutPageContentURL, { responseType: 'json' })
  }

  getServicesPageContent(): Observable<Object> {
    return this.http.get(this.servicesPageContentURL, { responseType: 'json' })
  }
}
