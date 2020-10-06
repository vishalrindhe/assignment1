import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from './../update/update.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  

  url:any="./assets/capture.JPG";

  profile 
  updateprofile
  id
  tag
  ImageInvalid=false;
  
  onSelectFile(event){
    let me = this
    if(event.target.files && event.target.files[0]) {
      this.checkResolution(event);
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload =() => {
        me.url=reader.result;
        console.log(me.url)
      }
      
    }
  }

  checkResolution(event) {
    let file = event.target.files && event.target.files[0];
    var img = new Image();
    img.src = window.URL.createObjectURL(file);
    var data: boolean = true;
    var me = this;
    img.onload = function() {
      var width = img.naturalWidth,
          height = img.naturalHeight;
      window.URL.revokeObjectURL(img.src);
      console.log(width,height)
      if (width == 310 && height == 325) {
        me.ImageInvalid = false;
      } else {
        me.ImageInvalid = true;
      }
    };
  }

  constructor(private route: ActivatedRoute, private enroll: EnrollmentService, private router: Router, public dialog: MatDialog) {
     this.id = route.snapshot.params.id;
     localStorage.setItem('id', this.id);
     this.getProfile(this.id);
  }

  getProfile(id) {
    this.enroll.getProfile(id).subscribe(Response => {this.profile = Response
    this.tag = JSON.parse(this.profile.tag)
    });
  }
  openDialogUpdate(): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      height: '600px',
      width: '1000px',
      data: this.profile
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

    ngOnInit(): void {
  }

}
