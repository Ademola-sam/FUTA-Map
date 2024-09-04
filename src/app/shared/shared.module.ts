import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { EventCardComponent } from '../components/event-card/event-card.component';



const sharedModule = [
  EventCardComponent
]


@NgModule({
  declarations: [sharedModule],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [sharedModule]
})
export class SharedModule { }
