import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  url="./assets/capture.JPG";

  onSelectFile(event) {
    console.log(event)
    if(event.target.files) {
      console.log(event.target.files)
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload =( event: any) => {
        this.url=event.target.result;
      }
    }  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
