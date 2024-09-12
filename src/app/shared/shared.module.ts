import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { EventCardComponent } from '../components/event-card/event-card.component';

const sharedModule = [EventCardComponent];

@NgModule({
  declarations: [sharedModule],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [sharedModule, MaterialModule],
})
export class SharedModule {}
