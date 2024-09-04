import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

import { ReactiveFormsModule } from '@angular/forms';


const materialModules = [
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule
]


@NgModule({
  declarations: [],
  imports: [
    materialModules
  ],
  exports: [materialModules]
})
export class MaterialModule { }
