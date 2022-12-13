import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RecursoHumano } from 'src/app/model/rh';
import { RechumanoService } from 'src/app/services/rechumano/rechumano.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InMemoryDataService } from 'src/app/in-memory-data.service';
import { PaginatePipe } from 'src/app/pipes/paginate.pipe';

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

  edit: boolean = false;

  rhId!: any; 

  constructor(private service: RechumanoService) { }
  ngOnInit(): void {    
    this.service.getRecurso().subscribe(resp => {
      this.recursoHumano = resp; 
      this.rhId = this.recursoHumano[0].id;
    });
  }
  page_size: number = 5;
  page_number: number = 1; 

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
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
