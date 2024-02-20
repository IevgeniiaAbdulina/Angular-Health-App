import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const materialModuls = [
  MatButtonModule,
  MatSlideToggleModule
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
