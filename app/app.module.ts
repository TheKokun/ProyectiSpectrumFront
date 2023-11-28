import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaDetailPersonaComponent } from './persona/persona-detail-persona.component';
import { PersonaNewPersonaComponent } from './persona/persona-new-persona.component';
import { PersonaEditPersonaComponent } from './persona/persona-edit-persona.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PersonaListPersonaComponent } from './persona/persona-list-persona.component';
import { InicioComponent } from './persona/inicio.component';
import { PersonaTestPersonaComponent } from './persona/persona-test-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaDetailPersonaComponent,
    PersonaNewPersonaComponent,
    PersonaEditPersonaComponent,
    PersonaListPersonaComponent,
    InicioComponent,
    PersonaTestPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
