import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarRhComponent } from './registrar-rh/registrar-rh.component';
import { FormBusquedaComponent } from './form-busqueda/form-busqueda.component';

const routes: Routes = [
  {path:'', component: FormBusquedaComponent},
  {path: 'registrar', component:RegistrarRhComponent},
  {path:'**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
