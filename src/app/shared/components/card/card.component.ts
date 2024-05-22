import { Component, Input } from '@angular/core';
import { ServiceOption } from 'src/app/components/services-page/models/services.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id: number | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() options: ServiceOption[] | undefined;
  @Input() imgLink: string | undefined;
  @Input('customClass') customClass: string | undefined;
}
