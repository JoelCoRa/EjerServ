import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrarRhComponent } from './acciones/registrar-rh/registrar-rh.component';
import { ConsultarRhComponent } from './acciones/consultar-rh/consultar-rh.component';
import { ModificarRhComponent } from './acciones/modificar-rh/modificar-rh.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registrar', component:RegistrarRhComponent},  
  {path: 'consultar/:id', component: ConsultarRhComponent},
  {path: 'modificar/:id', component: ModificarRhComponent},
  {path:'**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
