import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
    private toastController: ToastController
  ) {
    this.signupForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  // Validator to check if password match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('password2');
    console.log(
      password?.value === confirmPassword?.value ? null : { mismatch: true }
    );
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
    if (this.signupForm.valid) {
      const { fullName, email, password } = this.signupForm.value;

      try {
        // Firebase Authentication using email and password
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(
          email,
          password
        );

        // Update the user's display name Firebase Authentication

        await userCredential.user?.updateProfile({
          displayName: fullName,
        });

        await this.afs.collection('user').doc(userCredential.user?.uid).set({
          fullName: fullName,
          email: email,
          createAt: new Date(),
        });

        // Show success toast and navigate
        this.presentToast('User registered successfully!', 'success');
        this.router.navigate(['/sign-in']);
      } catch (error) {
        // Handle error during registration
        this.presentToast('Registration failed: ' + error);
      }
    } else {
      this.presentToast('Please fill out all required fields');
    }
  }

  ngOnInit() {}
}
