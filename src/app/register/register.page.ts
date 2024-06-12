import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  formRegister = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  
  register(event: Event) {
    event.preventDefault();

    if (this.formRegister.valid) {
      try {
        let username = this.formRegister.value.username as string;
        let email = this.formRegister.value.email as string;
        let password = this.formRegister.value.password as string;
        this.authService.register(email, username, password);

        this.router.navigate(['/inicio']);

      } catch (error) {
        console.log("Error: ", error);
      }
    } else{
      console.log("Fomulario invalido");
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
