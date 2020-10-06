import { Component, Inject, OnInit, NgModule } from '@angular/core';
import { Reg } from '../reg';

import { ActivatedRoute } from '@angular/router';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 

import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private _router: any;
  reg: Reg;
 
  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reg,
    private route: ActivatedRoute, 
    private update: EnrollmentService,
    private _enrollmentService: EnrollmentService,
    private router: Router,
    ) {
      this.id = localStorage.getItem('id');
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // url:any="./assets/capture.JPG";

  id
  tag
  title = 'angular-material';
  stateHasError = true;
  countryHasError = true;
  addressHasError = true;
  submitted=false;
  // ImageInvalid=false;
  errorMsg = '';
 
  // url:any="./assets/blank.jpeg";

  // onSelectFile(event){
  //   let me = this
  //   if(event.target.files && event.target.files[0]) {
  //     this.checkResolution(event);
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload =() => {
  //       me.url=reader.result;
  //       console.log(me.url)
  //     }
      
  //   }
  // }

  // checkResolution(event) {
  //   let file = event.target.files && event.target.files[0];
  //   var img = new Image();
  //   img.src = window.URL.createObjectURL(file);
  //   var data: boolean = true;
  //   var me = this;
  //   img.onload = function() {
  //     var width = img.naturalWidth,
  //         height = img.naturalHeight;
  //     window.URL.revokeObjectURL(img.src);
  //     console.log(width,height)
  //     if (width == 310 && height == 325) {
  //       me.ImageInvalid = false;
  //     } else {
  //       me.ImageInvalid = true;
  //     }
  //   };
  // }
  
  states = [ "Andhra Pradesh","Arunachal Pradesh",
            "Assam","Bihar","Chhattisgarh", "Goa", "Gujarat","Haryana",
            "Himachal Pradesh","Jharkhand","Karnataka","Kerala",
            "Madhya Pradesh","Maharashtra","Manipur"," Meghalaya",
            " Mizoram"," Nagaland","Odisha","Punjab","Rajasthan",
            "Sikkim","Tamil Nadu","Telangana","Tripura",
            "Uttar Pradesh","Uttarakhand","West Bengal"];

  countries = ["India", "Pak", "China"];

  addresses = [ "Home", "Company"];

  userModel: Reg = {
    img: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    age: 20,
    address: "default",
    addressline1: "",
    addressline2: "",
    state: "default",
    country: "default",
    tag: "",
    subscribe: false};

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  validateState(value) {
    if (value === 'default'){
    this.stateHasError=true;
    } else {
      this.stateHasError = false;
    }
  }

  validateCountry(value) {
    if (value === 'default'){
    this.countryHasError=true;
    } else {
      this.countryHasError = false;
    }
  }

  validateAddress(value) {
    if (value === 'default'){
    this.addressHasError=true;
    } else {
      this.addressHasError = false;
    }
  }

  selectedtags($event){
    this.userModel.tag = JSON.stringify($event);
  }
  

  onUpdateSubmit(){
    this.submitted = true;
    // this.userModel.img = this.url;
    console.log(this.userModel);
    this._enrollmentService.update(this.userModel, this.id)
      .subscribe(
        data => {
          this.router.navigate(["profile/"+data.id])
          console.log('Success!',data)},
          error => this.errorMsg = error.statusText
      )
  }

  onChange(event) {
    console.log(event);
    this.userModel.age = event.value;
  }

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  

  ngOnInit(): void {
  }

}
