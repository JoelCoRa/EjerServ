import { Component } from '@angular/core';
import { EliminarRhComponent } from './acciones/eliminar-rh/eliminar-rh.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  deptos: string[] = ['Sistemas','Análisis','RH']
  black: string = 'black'
  puestos: string[] = ['Analista de Sistemas','Desarrollador BackEnd', 'Desarrollador FrontEnd']
  estados: string[] = ['Activo','Inactivo','Despedido']

  
  
  
 
  title = 'listar-rh';
}
