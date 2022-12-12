import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-rh',
  templateUrl: './consultar-rh.component.html',
  styleUrls: ['./consultar-rh.component.css']
})
export class ConsultarRhComponent implements OnInit {

  urlImage: string = '../../assets/icons/user.png';

  constructor() { }

  ngOnInit(): void {
  }

}
