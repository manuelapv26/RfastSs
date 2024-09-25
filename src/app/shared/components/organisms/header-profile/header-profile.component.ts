import { Component } from '@angular/core';
import { AuthService } from '../../../../features/feature-login/services/auth.service';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrl: './header-profile.component.scss'
})
export class HeaderProfileComponent {
  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout(); 
  }
}
