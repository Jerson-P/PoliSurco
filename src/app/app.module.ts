import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmisoraComponent } from './shared/emisora/emisora.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AdmisionesComponent } from './pages/admisiones/admisiones.component';
import { AcademicaComponent } from './pages/academica/academica.component';
import { ElpoliComponent } from './pages/elpoli/elpoli.component';
import { ContactosComponent } from './pages/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    EmisoraComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    AdmisionesComponent,
    AcademicaComponent,
    ElpoliComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
