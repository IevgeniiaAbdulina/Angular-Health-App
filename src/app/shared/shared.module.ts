import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';

const materialModuls = [
  MatButtonModule,
  MatCardModule,
  CdkAccordionModule,
  MatExpansionModule
]

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    materialModuls
  ],
  exports: [
    materialModuls,
    ButtonComponent
  ]
})
export class SharedModule { }
