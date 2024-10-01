import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
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

        console.log('Login successful', userCredential);
        this.router.navigate(['/tabs/explore']);
      } catch (error) {
        console.error('Login failed: ', error);
      }
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit() {}
}
