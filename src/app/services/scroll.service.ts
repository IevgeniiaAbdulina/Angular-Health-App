import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router: Router) { }

  public scrollToId(elementId: string): void {
    this.router.navigate(['home'], { fragment: elementId });
  }
}
