import { Component, Input, OnInit } from '@angular/core';
import { RechumanoService } from 'src/app/services/rechumano/rechumano.service';
import { RecursoHumano } from 'src/app/model/rh';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private service: RechumanoService) { }

  deptos: string[] = ['Sistemas','Análisis','RH']
  black: string = 'black'
  puestos: string[] = ['Analista de Sistemas','Desarrollador BackEnd', 'Desarrollador FrontEnd']
  estados: string[] = ['Activo','Inactivo','Despedido']

  @Input() visible: boolean = true;
  @Input() buscar: boolean = true;

  

  ngOnInit(): void {
  }

}
