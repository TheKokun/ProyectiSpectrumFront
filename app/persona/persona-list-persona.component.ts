import { Component, OnInit } from '@angular/core';
import { Personas } from '../models/personas';
import { PersonaService } from '../service/persona.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-persona-list-persona',
  templateUrl: './persona-list-persona.component.html',
  styleUrls: ['./persona-list-persona.component.css']
})
export class PersonaListPersonaComponent  implements OnInit {
  personas: Personas[] = [];

  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.personaService.lista().subscribe(
      data => {
        this.personas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.personaService.delete(id).subscribe(
      data => {
        this.toastr.success('Persona Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarPersonas();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
