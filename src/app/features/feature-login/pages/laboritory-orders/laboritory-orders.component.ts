import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-laboritory-orders',
  templateUrl: './laboritory-orders.component.html',
  styleUrl: './laboritory-orders.component.scss'
})
export class LaboritoryOrdersComponent {
  isOpen: boolean = false; // Property to control modal state
  selectedOrder: any; // Property to store the selected order

  // Sample data for orders
  ordenes = [
    { fechaOrden: '2024-09-10', nombreOrden: 'Orden A', numeroOrden: '001' },
    { fechaOrden: '2024-09-12', nombreOrden: 'Orden B', numeroOrden: '002' },
    { fechaOrden: '2024-09-15', nombreOrden: 'Orden C', numeroOrden: '003' },
  ];

  // Search filter
  filtro = {
    numeroOrden: '',
    fechaInicio: '',
    fechaFinal: ''
  };

  // Method to filter orders
  ordenesFiltradas() {
    return this.ordenes.filter(orden => {
      const cumpleNumeroOrden = this.filtro.numeroOrden
        ? orden.numeroOrden.includes(this.filtro.numeroOrden)
        : true;
      const cumpleFechaInicio = this.filtro.fechaInicio
        ? new Date(orden.fechaOrden) >= new Date(this.filtro.fechaInicio)
        : true;
      const cumpleFechaFinal = this.filtro.fechaFinal
        ? new Date(orden.fechaOrden) <= new Date(this.filtro.fechaFinal)
        : true;

      return cumpleNumeroOrden && cumpleFechaInicio && cumpleFechaFinal;
    });
  }

  // Method to open the modal with order details
  openModal(orden: any): void {
    this.selectedOrder = orden; // Store the selected order
    this.isOpen = true; // Open the modal
  }

  // Method to close the modal
  closeModal(): void {
    this.isOpen = false; // Close the modal
    this.selectedOrder = null; // Clear the selected order
  }
}
