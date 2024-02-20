import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const materialModuls = [
  MatButtonModule,
  MatCardModule
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
