import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService} from 'ngx-cookie-service';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { SlickCarouselModule } from 'ngx-slick-carousel';



//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

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
import { from } from 'rxjs';




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
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgxPaginationModule,
    SlickCarouselModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
