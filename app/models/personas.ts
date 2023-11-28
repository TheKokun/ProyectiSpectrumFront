export class Personas {
    id!: number;
    nombre: string;
    apellido: string;
    email: string;
    edad: string;

    constructor(nombre: string, apellido: string,email: string, edad: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.edad = edad;
    }
}
