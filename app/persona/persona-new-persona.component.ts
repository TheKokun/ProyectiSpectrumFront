import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PersonaService } from '../service/persona.service';
import { Personas } from '../models/personas';

@Component({
  selector: 'app-persona-new-persona',
  templateUrl: './persona-new-persona.component.html',
  styleUrls: ['./persona-new-persona.component.css']
})
export class PersonaNewPersonaComponent implements OnInit {

  nombre_paciente='';
  nombre_tutor='';
  email='';
  edad='';


  constructor(
    private personaService: PersonaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const persona = new Personas(this.nombre_paciente, this.nombre_tutor,this.email,this.edad);
    this.personaService.save(persona).subscribe(
      data => {
        this.toastr.success('Persona Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
