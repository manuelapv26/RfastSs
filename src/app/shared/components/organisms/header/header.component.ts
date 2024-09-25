import { Component } from '@angular/core';
import { AuthService } from '../../../../features/feature-login/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout(); 
  }
}
