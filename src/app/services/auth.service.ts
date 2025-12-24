import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User, UserCredential } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged(user => {
      this.userSubject.next(user);
    });
  }

  signUpWithEmail(email: string, password: string, name: string): Promise<void> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: name });
      });
  }

  signInWithEmail(email: string, password: string): Promise<void> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: UserCredential) => {
        this.userSubject.next(userCredential.user);
      });
  }

  logout(): void {
    this.auth.signOut();
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }
}


