import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  user: User | null = null;
  loginSuccess: boolean = false;
  isSignUpMode: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.user$.subscribe(u => this.user = u);
  }

  toggleMode(): void {
    this.isSignUpMode = !this.isSignUpMode;
    this.loginSuccess = false;
    this.clearFields();
  }

  signUp(): void {
  if (!this.name || !this.email || !this.password || !this.confirmPassword) {
    alert('Please fill in all fields.');
    return;
  }

  if (this.password !== this.confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  this.authService.signUpWithEmail(this.email, this.password, this.name)
    .then(() => {
      this.loginSuccess = true;
      this.isSignUpMode = false;
      this.clearFields();
      setTimeout(() => {
        this.router.navigate(['/booknow']);
      }, 4000);
    })
    .catch((err: any) => {
      alert('Sign-Up failed: ' + err.message);
    });
}


  signIn(): void {
    if (!this.email || !this.password) {
      alert('Please enter both email and password.');
      return;
    }

    this.authService.signInWithEmail(this.email, this.password)
      .then(() => {
        this.loginSuccess = true;
        this.clearFields();
        setTimeout(() => {
          this.router.navigate(['/booknow']);
        }, 2000);
      })
      .catch((err: any) => {
        if (err.code === 'auth/wrong-password') {
          alert('Incorrect password. Please try again.');
        } else if (err.code === 'auth/user-not-found') {
          alert('No account found with this email. Please sign up first.');
        } else if (err.code === 'auth/invalid-credential') {
          alert('Invalid credentials. Try again.');
        } else {
          alert('Sign-In failed: ' + err.message);
        }
      });
  }

  logout(): void {
  this.authService.logout();
  this.loginSuccess = false;
  alert('Logout successfully');
  this.clearFields();
  this.router.navigate(['/login']);
}


  clearFields(): void {
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
