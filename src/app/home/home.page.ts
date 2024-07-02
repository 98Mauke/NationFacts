import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  password: string | undefined;

  formBuilder = inject(FormBuilder);
  serviceAuth: AuthService = inject(AuthService);

  formLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor() {}

  togglePasswordVisibility(): void {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }

  login(event: Event) {
    event.preventDefault();

    if (this.formLogin.valid) {
      try {
        let email = this.formLogin.value.email as string;
        let password = this.formLogin.value.password as string;
        this.serviceAuth.login(email, password);

      } catch (error) {
        console.log("Error: ", error);
      }
    } else{
      console.log("Fomulario invalido");
    }
  }
}
