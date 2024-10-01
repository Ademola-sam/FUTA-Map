import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventPage {
  eventTypes: any = [
    { value: 'Conference', viewValue: 'Conference' },
    { value: 'Workshop', viewValue: 'Workshop' },
    { value: 'Webinar', viewValue: 'Webinar' },
    { value: 'Concert', viewValue: 'Concert' },
  ];

  constructor() {}

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    eventName: ['', Validators.required],
    file: ['', Validators.required],
    eventDescription: ['', Validators.required],
    eventType: ['', Validators.required],
    organizerName: ['', Validators.required],
    eventDate: ['', Validators.required],
    location: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    eventStatus: ['', Validators.required],
  });
  isLinear = false;

  onSubmit() {
    const formValue = this.firstFormGroup.value;
    const formValue1 = this.secondFormGroup.value;

    console.log('Form Value:', formValue, formValue1);
  }
}
