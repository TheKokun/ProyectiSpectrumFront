import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Personas } from '../models/personas';

@Component({
  selector: 'app-persona-detail-persona',
  templateUrl: './persona-detail-persona.component.html',
  styleUrls: ['./persona-detail-persona.component.css']
})
export class PersonaDetailPersonaComponent  implements OnInit {

  persona: Personas | undefined;
  constructor(
    private personaService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
