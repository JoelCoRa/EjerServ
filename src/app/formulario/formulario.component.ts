import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  deptos: string[] = ['Sistemas','Análisis','RH']
  black: string = 'black'
  puestos: string[] = ['Analista de Sistemas','Desarrollador BackEnd', 'Desarrollador FrontEnd']
  estados: string[] = ['Activo','Inactivo','Despedido']

  @Input() visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
