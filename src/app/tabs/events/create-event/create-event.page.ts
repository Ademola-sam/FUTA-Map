import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/services/data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Firestore for event details
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventPage {
  userId: string | null = null;
  file: File | null = null; // Variable to store the selected file
  downloadURL: string = ''; // Variable to store the file download URL

  isLinear = false;

  eventTypes: any = [
    { value: 'Conference', viewValue: 'Conference' },
    { value: 'Workshop', viewValue: 'Workshop' },
    { value: 'Webinar', viewValue: 'Webinar' },
    { value: 'Concert', viewValue: 'Concert' },
  ];

  constructor(
    private afAuth: AngularFireAuth,
    private ds: DataService,
    private toastController: ToastController,
    private storage: AngularFireStorage,
    private router: Router,
    private firestore: AngularFirestore
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userId = user.uid; // Capture the user ID
        console.log('userId => ', this.userId);
      }
    });
  }

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    eventName: ['', Validators.required],
    eventDescription: ['', Validators.required],
    eventType: ['', Validators.required],
    organizerName: ['', Validators.required],
    eventDate: ['', Validators.required],
    location: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    eventStatus: ['', Validators.required],
  });

  // Handle file input change event
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
    }
  }

  // Toast message display
  async presentToast(message: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'bottom',
    });
    toast.present();
  }

  async onSubmit() {
    if (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.userId
    ) {
      const {
        eventName,
        eventDescription,
        eventType,
        organizerName,
        eventDate,
        location,
      } = this.firstFormGroup.value;
      const { eventStatus } = this.secondFormGroup.value;

      try {
        const filePath = `events/${this.userId}/${Date.now()}_${
          this.file?.name
        }`;
        const fileRef = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, this.file);

        // Show uploading progress (optional)
        task.percentageChanges().subscribe((progress) => {
          console.log('Upload is ' + progress + '% done');
        });
        // Once the file is uploaded, get the download URL and save event data
        task
          .snapshotChanges()
          .pipe(
            finalize(async () => {
              this.downloadURL = await fileRef.getDownloadURL().toPromise();

              // Save event data in Firestore with the file download URL
              await this.firestore.collection('events').add({
                eventName: eventName,
                eventDescription: eventDescription,
                eventType: eventType,
                organizerName: organizerName,
                eventDate: eventDate,
                eventStatus: eventStatus,
                eventLocation: location,
                fileURL: this.downloadURL, // Save the file download URL
                createdBy: this.userId, // Save the user ID
                createdAt: new Date(),
              });

              // Show success toast and redirect to event list or any other page
              this.presentToast('Event created successfully!', 'success');
              this.router.navigate(['tabs/events']); // Navigate to the event list page
            })
          )
          .subscribe();
      } catch (error: any) {
        // Handle error
        this.presentToast('Error creating event: ' + error.message);
      }
    } else {
      this.presentToast(
        'Please fill out all required fields and select a file'
      );
    }
  }
}
