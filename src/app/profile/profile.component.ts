import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  url="./assets/capture.JPG";

  onSelectFile(event){
    console.log(event)
    // if(event.target.files) {
      // console.log(event.target.files)
      var reader = new FileReader();
  if (event.target.files && event.target.files[0]) {
    console.log(event.target.files)
      reader.readAsDataURL(event.target.files[0]);
      reader.onload =( event: any) => {
        if (event.target.files[0].type === 'image/jpeg' || 
        event.target.files[0].type === 'image/png' || 
        event.target.files[0].type ==='image/jpg') {
      if (event.target.files[0].size < 200 * 200){ 
        alert('photo should be 200 x 200 size');
                } else {
                  this.url=event.target.result;
                }
    }
    }
      // }
    }  
  }


//   onFileChange(event) {
//     let reader = new FileReader();
//     if (event.target.files && event.target.files.length > 0) {
//       let file = event.target.files[0];
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         this.url=event.target.result;
//       };
//    }

// }  

// window.URL = window.URL || window.webkitURL;

// onFileChange(event) {
//   let reader = new FileReader();
//   if (event.target.files && event.target.files.length > 0) {
//     let file = event.target.files[0];
  
//     let img = new Image();
  
//     img.src = window.URL.createObjectURL( file );
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setTimeout(() => {
//         const width = img.naturalWidth;
//         const height = img.naturalHeight;
  
//         window.URL.revokeObjectURL( img.src );
//         console.log(width + '*' + height);
//         if ( width > 213 && height > 219 ) {
//           alert('photo should be 64 x 64 size');
//           // form.reset();
//         } else {
//           this.url=event.target.result;
//         }
//       }, 2000);
//         };
//  }  
// }

// readUrl(event: any) {
//   if (event.target.files && event.target.files[0]) {

// if (event.target.files[0].type === 'image/jpeg' || 
//     event.target.files[0].type === 'image/png' || 
//     event.target.files[0].type ==='image/jpg') {
//   if (event.target.files[0].size < 200 * 200){ 
//     // if (event.target.files[0].size < 2000000) {/* checking size here - 2MB */ }
//     alert('photo should be 64 x 64 size');
//               // form.reset();
//             } else {
//               this.url=event.target.result;
//             }
// }
// }
// }
  constructor() { }

  ngOnInit(): void {
  }

}
