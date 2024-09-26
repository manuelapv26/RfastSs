// Clase para la información de la persona
export class Persona {
    constructor(
      public nombre: string,
      public apellido: string,
      public numeroIdentificacion: string,
      public fechaNacimiento: Date,
      public sexoBiologico: string,
      public direccion: string,
      public telefonoMovil: string,
      public email: string,
      public ordenes: Orden[]  // Relación con órdenes
    ) {}
  }
  
  // Clase para las órdenes médicas
  export class Orden {
    constructor(
      public numeroOrden: string,
      public fechaOrden: Date,
      public codigoDocumento: string,
      public profesionalOrdenante: string,
      public resultados: Resultado[]  // Relación con resultados de laboratorio
    ) {}
  }
  
  // Clase para los resultados de laboratorio
  export class Resultado {
    constructor(
      public nombrePrueba: string,
      public resultadoOpcion: string,
      public resultadoNumerico?: number,
      public resultadoTexto?: string
    ) {}
  }