import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/utilities/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-eliminar-rh',
  templateUrl: './eliminar-rh.component.html',
  styleUrls: ['./eliminar-rh.component.css']
})
export class EliminarRhComponent implements OnInit {


  urlIcono: string = '../assets/icons/eliminar.png'

  constructor(public dialog: MatDialog ) {}


  openDialog():void{
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }

  

  ngOnInit(): void {
  }

}
