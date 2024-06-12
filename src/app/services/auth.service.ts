import { Injectable } from '@angular/core';

import { inject } from "@angular/core";
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth = inject(Auth);
  router: Router = inject(Router);
  constructor() { }

  login(email: string, password: string) {
    const promise = signInWithEmailAndPassword(this.auth, email, password).then(response => {
      console.log(response);

      this.router.navigate(['/inicio']);
    }).catch(error => {
      console.log(error);
    });

    return from(promise);
  }
  //Esto es parte del codigo para registrar un usuario
  firebaseAuth = inject(Auth);

  register(
    email: string, 
    username: string,
    password: string,
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email, 
      password,
    ).then(response =>
      updateProfile(response.user, {displayName: username }),
    );
    return from(promise);
  }

  

}
