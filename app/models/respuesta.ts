export class Respuestas {
    id!: number;
    pregunta: string;

    constructor(id: number, pregunta: string) {
      this.pregunta = pregunta;
      this.id = id;
    }
}