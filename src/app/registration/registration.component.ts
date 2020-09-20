import { Component, OnInit } from '@angular/core';
import { Reg } from '../reg';

import { FormControl, Validators } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';

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

  userModel = new Reg ( "", "", "" , 9876543210, 2 , "default","default","default","default","default" ,true);
  constructor(private _enrollmentService: EnrollmentService){

  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!',data),
        error => this.errorMsg = error.statusText
      )
  }

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

  onChange(event) {
    console.log(event);
  }

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  ngOnInit(): void {
  }

}
