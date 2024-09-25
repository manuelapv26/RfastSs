import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  recaptchaVerified: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.recaptchaVerified && this.loginForm.valid) {
      // Aquí puedes manejar el envío del formulario
      console.log(this.loginForm.value);
    } else {
      alert('Por favor completa el CAPTCHA y verifica los campos del formulario.');
    }
  }

  onRecaptchaResolved(captchaResponse: string | null) {
    if (captchaResponse) {  // Verifica que no sea null
      console.log(`CAPTCHA Respuesta: ${captchaResponse}`);
      this.recaptchaVerified = true; // Marca el CAPTCHA como completado
    } else {
      console.error("reCAPTCHA no se resolvió.");
      this.recaptchaVerified = false; // Asegúrate de reiniciar el estado si es null
    }
  }
}
