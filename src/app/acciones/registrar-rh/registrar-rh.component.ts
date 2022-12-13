import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RechumanoService } from 'src/app//services/rechumano/rechumano.service';
import { RecursoHumano } from 'src/app/model/rh';
import { TablaRhComponent } from 'src/app/utilities/tabla-rh/tabla-rh.component';

@Component({
  selector: 'app-registrar-rh',
  templateUrl: './registrar-rh.component.html',
  styleUrls: ['./registrar-rh.component.css']
})
export class RegistrarRhComponent implements OnInit {
  
  constructor(private router: Router,private service: RechumanoService) { } 

  // deptos: string[] = ['Sistemas','Análisis','RH']
  
  black: string = 'black'
  puestos: any[] = [
    {name: 'Analista de Sistemas'},
    {name: 'Desarrollador BackEnd'},
    {name: 'Desarrollador FrontEnd'}];
  deptos: any[] = [
    {name: 'Sistemas'},
    {name: 'Análisis'},
    {name: 'RH'}];
  estados: string[] = ['Activo','Inactivo','Despedido']

  urlImage: string = '../../assets/icons/user.png'

  modelRH = new RecursoHumano();

  recursoHumano!: RecursoHumano[];

  listo: boolean = true;
  @Input() visible: boolean = false;
  @Input() buscar: boolean = false;

  
  Guardar(recursoHumano: RecursoHumano){
    this.service.createRH(recursoHumano).subscribe( data =>{      
      alert("Recurso Humano registrado correctamente :D");
      console.log(data)
      this.recursoHumano.push(data);
    })
  }

  ngOnInit(): void {
  }

}
