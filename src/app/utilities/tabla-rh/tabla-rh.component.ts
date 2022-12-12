import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RecursoHumano } from 'src/app/model/rh';
import { PruebaService } from 'src/app/services/prueba/prueba.service';
import { RechumanoService } from 'src/app/services/rechumano/rechumano.service';

@Component({
  selector: 'app-tabla-rh',
  templateUrl: './tabla-rh.component.html',
  styleUrls: ['./tabla-rh.component.css']
})
export class TablaRhComponent implements OnInit {

  campo: string[] = ['ID','Nombres', 'Primer Apellido', 'Segundo Apellido', 'Curp', 'Puesto', 'Departamento','Estado','Acciones'];

  urlEditar: string = '../assets/icons/editar.png';
  urlConsultar: string = '../assets/icons/consultar.png';

  public recursoHumano!: RecursoHumano[];

 


  constructor(private service: RechumanoService) { }
  ngOnInit(): void {    
    this.service.getRecurso().subscribe(resp => {
      this.recursoHumano = resp; 
    });
  }

  
}

export interface Personaje{
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: any;
  location: any; 
}
