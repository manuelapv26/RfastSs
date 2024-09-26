import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      documentType: ['', Validators.required],
      documentNumber: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { documentType, documentNumber, birthdate } = this.loginForm.value;

      // Convertir la fecha al formato YYYY-MM-DD
      const formattedBirthdate = this.convertDateToBackendFormat(birthdate);
      console.log('Datos a enviar:', { documentType, documentNumber, formattedBirthdate });

      // Llamar al servicio de autenticación
      this.authService.login(documentType, documentNumber, formattedBirthdate).subscribe(
        response => {
          console.log('Respuesta del backend:', response);
          this.authService.handleLogin(response.token);
          console.log('Autenticación exitosa');
        },
        error => {
          console.error('Error de autenticación', error);
          alert('Error de autenticación: ' + (error.error?.message || 'Error desconocido'));
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
      alert('Por favor verifica los campos del formulario.');
    }
  }

  // Función para convertir la fecha al formato YYYY-MM-DD
  convertDateToBackendFormat(date: string): string {
    const dateObj = new Date(date);
    const year = dateObj.getUTCFullYear();
    const month = ('0' + (dateObj.getUTCMonth() + 1)).slice(-2); // Meses de 0 a 11, por eso el +1
    const day = ('0' + dateObj.getUTCDate()).slice(-2); // Agregar el 0 al inicio si es necesario

    return `${year}-${month}-${day}`;
  } 
}
