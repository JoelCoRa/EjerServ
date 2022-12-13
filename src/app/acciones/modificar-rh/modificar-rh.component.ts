import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InMemoryDataService } from 'src/app/in-memory-data.service';
import { RecursoHumano } from 'src/app/model/rh';
import { RechumanoService } from 'src/app/services/rechumano/rechumano.service';

@Component({
  selector: 'app-modificar-rh',
  templateUrl: './modificar-rh.component.html',
  styleUrls: ['./modificar-rh.component.css']
})
export class ModificarRhComponent implements OnInit {


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

  constructor(private service: RechumanoService) { }

  ngOnInit(): void {
    this.service.getRecurso().subscribe(resp => {
      this.recursoHumano = resp; 
      console.log(resp)
    });
  }

  Actualizar(recursoHumano: RecursoHumano){
    this.service.createRH(recursoHumano).subscribe( data =>{      
      alert("Recurso Humano registrado correctamente :D");
      console.log(data)
      this.recursoHumano.push(data);
    })
  }

}
