import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-rh',
  templateUrl: './listar-rh.component.html',
  styleUrls: ['./listar-rh.component.css']
})
export class ListarRhComponent implements OnInit {

  deptos: string[] = ['Sistemas','Análisis','RH']
  black: string = 'black'
  puestos: string[] = ['Analista de Sistemas','Desarrollador BackEnd', 'Desarrollador FrontEnd']
  estados: string[] = ['Activo','Inactivo','Despedido']

  @Input() visible: boolean = true;

  urlIcon: string =  '../assets/icons/registrar.png'

  constructor() { }

  ngOnInit(): void {
  }

}
