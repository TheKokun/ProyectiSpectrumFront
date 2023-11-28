import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Preguntas } from '../models/preguntas';
import { PersonaService } from '../service/persona.service';

import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'app-persona-test-persona',
    templateUrl: './persona-test-persona.component.html',
    styleUrls: ['./persona-test-persona.component.css'],
    animations: [
        trigger('fade', [
            state('enabled', style({ opacity: 1 })),
            state('disabled', style({ opacity: 0.5 })),
            transition('enabled => disabled', animate('500ms ease-out')),
            transition('disabled => enabled', animate('500ms ease-in'))
        ])
    ]
})

export class PersonaTestPersonaComponent implements OnInit {
    preguntas: Preguntas[] = [];
    respuestas: string[] = [];
    isFormDisabled: boolean = false; // Inicializa en falso, lo que significa que el formulario no estará deshabilitado al principio
    formState: 'enabled' | 'disabled' = 'enabled';


    /* ----------------------------------------- inicio */
    constructor(
        private perssonaService: PersonaService,
    ) { }

    ngOnInit() {
        this.cargarPreguntas();
    }

    /* -------------------------fin */

    cargarPreguntas(): void {
        this.perssonaService.listaPreguntas().subscribe(
            data => {
                this.preguntas = data;
            },
            err => {
                console.log(err);
            }
        );
    }

    contarRespuestasSi(): number {
        return this.respuestas.filter(respuesta => respuesta === 'si').length;
    }
    toggleFormState() {
        this.formState = this.formState === 'enabled' ? 'disabled' : 'enabled';
      }
}
