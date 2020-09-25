import { HomeComponent } from './../home/home.component';
import { Component, Inject, OnInit, NgModule } from '@angular/core';
import { Reg } from '../reg';

import { FormControl, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider'; 

import {MatToolbarModule} from '@angular/material/toolbar'; 

import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    private _enrollmentService: EnrollmentService,
    private router: Router
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  title = 'angular-material';
  stateHasError = true;
  countryHasError = true;
  addressHasError = true;
  submitted=false;
  errorMsg = '';
 
  url="./assets/blank.jpeg";

  onSelectFile(event){
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload =( event: any) => {
        this.url=event.target.result;
      }
      
    }
  }
  
  states = [ "Andhra Pradesh","Arunachal Pradesh",
            "Assam","Bihar","Chhattisgarh", "Goa", "Gujarat","Haryana",
            "Himachal Pradesh","Jharkhand","Karnataka","Kerala",
            "Madhya Pradesh","Maharashtra","Manipur"," Meghalaya",
            " Mizoram"," Nagaland","Odisha","Punjab","Rajasthan",
            "Sikkim","Tamil Nadu","Telangana","Tripura",
            "Uttar Pradesh","Uttarakhand","West Bengal"];

  countries = ["India", "Pak", "China"];

  addresses = [ "Home", "Company"];

  userModel = new Reg ( "", "", "" , 9876543210, 2 , "default","","","default","default" ,true);
 

  // onSubmit(){
  //   this.submitted = true;
  //   this._enrollmentService.enroll(this.userModel)
  //     .subscribe(
  //       data => console.log('Success!',data),
  //       error => this.errorMsg = error.statusText
  //     )
  // }

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
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!',data),
        error => this.errorMsg = error.statusText
      )
  }
  onChange(event) {
    console.log(event);
  }

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  ngOnInit(): void {
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }

}


// import { Component, OnInit } from '@angular/core';
// import { Reg } from '../reg';

// import { FormControl, Validators } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
// import { HttpClient } from "@angular/common/http";

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }


// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.scss']
// })
// export class RegistrationComponent implements OnInit {

//   title = 'angular-material';
//   stateHasError = true;
//   countryHasError = true;
//   addressHasError = true;
//   submitted=false;
//   errorMsg = '';
//   private data:any = []
// //  constructor(private http: HttpClient) {
   
// //  }

// //  getData(){
// //    const url ='http://localhost:3000/enroll'
// //    this.http.get(url).subscribe((res)=>{
// //      this.data = res
// //      console.log(this.data)
// //    })
// //  }

 
//   url="./assets/blank.jpeg";

//   onSelectFile(event){
//     if(event.target.files) {
//       var reader = new FileReader();
//       reader.readAsDataURL(event.target.files[0]);
//       reader.onload =( event: any) => {
//         this.url=event.target.result;
//       }
      
//     }
//   }
  
//   states = [ "Andhra Pradesh","Arunachal Pradesh",
//             "Assam","Bihar","Chhattisgarh", "Goa", "Gujarat","Haryana",
//             "Himachal Pradesh","Jharkhand","Karnataka","Kerala",
//             "Madhya Pradesh","Maharashtra","Manipur"," Meghalaya",
//             " Mizoram"," Nagaland","Odisha","Punjab","Rajasthan",
//             "Sikkim","Tamil Nadu","Telangana","Tripura",
//             "Uttar Pradesh","Uttarakhand","West Bengal"];

//   countries = ["India", "Pak", "China"];

//   addresses = [ "Home", "Company"];

//   userModel = new Reg ( "", "", "" , 9876543210, 2 , "default","default","default","default","default" ,true);
//   // constructor(private _enrollmentService: EnrollmentService){

//   // }

  
//   //   this.submitted = true;
//   //   this._enrollmentService.enroll(this.userModel)
//   //     .subscribe(
//   //       data => console.log('Success!',data),
//   //       error => this.errorMsg = error.statusText
//   //     )
//   // }
//   constructor(private http: HttpClient) {
   
//   }
 
//   onSubmit(){
//     const url ='http://localhost:3000/enroll'
//     this.http.get(url).subscribe((res)=>{
//       this.data = res
//       console.log(this.data)
//     })
//   }
 

//   emailFormControl = new FormControl('', [
//     Validators.required,
//     Validators.email,
//   ]);

//   validateState(value) {
//     if (value === 'default'){
//     this.stateHasError=true;
//     } else {
//       this.stateHasError = false;
//     }
//   }

//   validateCountry(value) {
//     if (value === 'default'){
//     this.countryHasError=true;
//     } else {
//       this.countryHasError = false;
//     }
//   }

//   validateAddress(value) {
//     if (value === 'default'){
//     this.addressHasError=true;
//     } else {
//       this.addressHasError = false;
//     }
//   }

//   onChange(event) {
//     console.log(event);
//   }

//   options: FormGroup;
//   hideRequiredControl = new FormControl(false);
//   floatLabelControl = new FormControl('auto');

//   ngOnInit() {
//      this.onSubmit()
//   }

// }

