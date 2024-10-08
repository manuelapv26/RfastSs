import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.scss'
})
export class ProfileInformationComponent {
  warningVisible = false;

  showWarning() {
    this.warningVisible = true;
  }

  closeWarning() {
    this.warningVisible = false;
  }
}
