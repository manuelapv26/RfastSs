import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  login(token: string) {
    // Aquí puedes implementar la lógica para almacenar el token
    this.isAuthenticated = true;
    // Agregar lógica para almacenar el token en el almacenamiento local o en un servicio
    localStorage.setItem('authToken', token);
  }

  logout() {
    // Aquí puedes agregar la lógica para eliminar el token o cualquier otro dato de sesión.
    this.isAuthenticated = false;
    localStorage.removeItem('authToken'); // Eliminar el token del almacenamiento local

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['']);

    // Asegúrate de prevenir la navegación hacia atrás
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.pushState(null, '', location.href);
    };
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated; // O verifica si hay un token en el almacenamiento
  }
}
