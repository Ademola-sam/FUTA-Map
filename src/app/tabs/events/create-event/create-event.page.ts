import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

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
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
}
