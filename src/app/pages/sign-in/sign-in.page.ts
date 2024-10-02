import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      try {
        // Firebase Authentication using email and password
        const userCredential = await this.afAuth.signInWithEmailAndPassword(
          email,
          password
        );

        this.presentToast('Login successfully!', 'success');
        this.router.navigate(['/tabs/explore']);
      } catch (error: any) {
        // Handle different Firebase Auth errors
        switch (error.code) {
          case 'auth/user-not-found':
            this.presentToast('User not found. Please register.');
            break;
          case 'auth/wrong-password':
            this.presentToast('Incorrect password. Try again.');
            break;
          case 'auth/invalid-email':
            this.presentToast('Invalid email format.');
            break;
          default:
            this.presentToast('Login failed. Please try again.');
        }
      }
    } else {
      this.presentToast('Please fill all required fields.');
    }
  }

  ngOnInit() {}
}
