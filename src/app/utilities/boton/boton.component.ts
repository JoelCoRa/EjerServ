import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input() disabled: boolean = true;
  @Input() background: string = '';
  @Input() fontColor: string = 'black';
  @Input() margen: string = '2rem';


  constructor() { }

  ngOnInit(): void {
  }

}
