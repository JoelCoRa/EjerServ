import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-rh',
  templateUrl: './registrar-rh.component.html',
  styleUrls: ['./registrar-rh.component.css']
})
export class RegistrarRhComponent implements OnInit {

  deptos: string[] = ['Sistemas','Análisis','RH']
  black: string = 'black'
  puestos: string[] = ['Analista de Sistemas','Desarrollador BackEnd', 'Desarrollador FrontEnd']
  estados: string[] = ['Activo','Inactivo','Despedido']

  urlImage: string = '../../assets/icons/user.png'

  @Input() visible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
