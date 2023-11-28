import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaListPersonaComponent } from './persona/persona-list-persona.component';
import { PersonaDetailPersonaComponent } from './persona/persona-detail-persona.component';
import { PersonaNewPersonaComponent } from './persona/persona-new-persona.component';
import { PersonaEditPersonaComponent } from './persona/persona-edit-persona.component';
import { PersonaTestPersonaComponent } from './persona/persona-test-persona.component'
import { InicioComponent } from './persona/inicio.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'listaPersona', component: PersonaListPersonaComponent},
  {path: 'detalle/:id', component: PersonaDetailPersonaComponent},
  {path: 'nuevo', component: PersonaNewPersonaComponent},
  {path: 'editar/:id', component: PersonaEditPersonaComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'cuestionario', component: PersonaTestPersonaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
