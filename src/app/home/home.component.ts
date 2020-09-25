import { Component, OnInit } from '@angular/core';
import { RegistrationComponent } from './../registration/registration.component';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) {}

  
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      height: '600px',
      width: '1000px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
}
