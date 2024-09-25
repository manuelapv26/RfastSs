import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  headingText: string = '';
  paragraphText: string = '';
  private fullHeading: string = 'Bienvenido';
  private fullParagraph: string = 'Este aplicativo te permite consultar los resultados de tus laboratorios médicos, ofreciendo detalles de cada examen realizado.';
  private headingIndex: number = 0;
  private paragraphIndex: number = 0;
  private typingComplete: boolean = false; // Para saber si se ha completado el efecto de escritura

  ngOnInit(): void {
    this.startTyping();
  }

  private startTyping() {
    this.resetTyping(); // Reinicia los textos y los índices
    this.typeHeading(); // Comienza el efecto de escritura
  }

  private resetTyping() {
    this.headingText = '';
    this.paragraphText = '';
    this.headingIndex = 0;
    this.paragraphIndex = 0;
    this.typingComplete = false;
  }

  private typeHeading() {
    if (this.headingIndex < this.fullHeading.length) {
      this.headingText += this.fullHeading.charAt(this.headingIndex);
      this.headingIndex++;
      setTimeout(() => this.typeHeading(), 100); // Ajusta la velocidad de escritura aquí
    } else {
      this.typingComplete = true; // El encabezado ha terminado
      this.typeParagraph(); // Inicia el efecto en el párrafo
    }
  }

  private typeParagraph() {
    if (this.paragraphIndex < this.fullParagraph.length) {
      this.paragraphText += this.fullParagraph.charAt(this.paragraphIndex);
      this.paragraphIndex++;
      setTimeout(() => this.typeParagraph(), 50); // Ajusta la velocidad de escritura aquí
    } else {
      this.repeatTyping(); // Si se completa el párrafo, reinicia el proceso
    }
  }

  private repeatTyping() {
    setTimeout(() => {
      this.startTyping(); // Vuelve a iniciar el efecto de escritura
    }, 2000); // Tiempo de espera antes de reiniciar (ajusta según necesites)
  }
}
