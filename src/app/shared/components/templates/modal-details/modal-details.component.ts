import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrl: './modal-details.component.scss'
})
export class ModalDetailsComponent {
  @Input() isOpen: boolean = false; // Controls visibility from parent
  @Output() close = new EventEmitter<void>(); // Emit close event to parent
  @Input() orderDetails: any; // Order details to be displayed in modal

  // Method to close the modal
  closeModal(): void {
    this.close.emit(); // Emit close event to parent
  }
}
