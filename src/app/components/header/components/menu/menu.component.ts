import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  fillerNav = ['oferta', 'Zakres pomocy', 'kontact'];

  constructor(
    private scrollService: ScrollService) {}

  public onClick(elementId: string, index?: number): void {
    let id = '';

    if (!index) {
      id = elementId;
    } else {
      id = elementId + index;
    }

    this.scrollService.scrollToId(id);
    this.sidenav.toggle();
  }
}
