import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:10101/api/login';  // URL del backend
  private isAuthenticated = false;  // Estado de autenticación

  constructor(private http: HttpClient, private router: Router) { }

  // Método para enviar los datos al backend y recibir el token
  login(documentType: string, documentNumber: string, birthdate: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      tipoId: documentType,
      numeroId: documentNumber,
      fechanac: birthdate
    });
  }

  // Almacena el token y actualiza el estado de autenticación
  handleLogin(token: string) {
    this.isAuthenticated = true;
    localStorage.setItem('authToken', token);  // Guarda el token en el almacenamiento local
  }

  // Elimina el token y restablece el estado de autenticación
  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('authToken');  // Elimina el token del almacenamiento local

    // Redirige al usuario a la página de inicio de sesión
    this.router.navigate(['']);

    // Previene la navegación hacia atrás después de cerrar sesión
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.pushState(null, '', location.href);
    };
  }

  // Verifica si el usuario está autenticado (presencia de token)
  isLoggedIn(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;  // Devuelve true si el token existe, false si no
  }

  // Opción para obtener el token del almacenamiento
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
