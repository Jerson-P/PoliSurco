import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ElpoliComponent } from './pages/elpoli/elpoli.component';
import { AcademicaComponent } from './pages/academica/academica.component';
import { AdmisionesComponent } from './pages/admisiones/admisiones.component';
import { ContactosComponent } from './pages/contactos/contactos.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent }, //inicialmente siempre
  { path: 'el-polisurco', component: ElpoliComponent },
  { path: 'oferta-academica', component: AcademicaComponent },
  { path: 'admisiones', component: AdmisionesComponent },
  { path: 'contactanos', component: ContactosComponent },
  {path: '**',  pathMatch: 'full', redirectTo: 'home' } //ruta de exception
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
