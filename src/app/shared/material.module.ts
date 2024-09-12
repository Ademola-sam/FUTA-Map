import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

const materialModulesImport = [
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  FormsModule,
  MatStepperModule,
  MatSelectModule,
  MatDatepickerModule,
];

@NgModule({
  declarations: [],
  imports: [materialModulesImport],
  exports: [materialModulesImport],
})
export class MaterialModule {}
