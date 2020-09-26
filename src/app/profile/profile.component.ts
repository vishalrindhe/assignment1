import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  url="./assets/capture.JPG";

  profile 
  id
  tag

  constructor(private route: ActivatedRoute, private enroll: EnrollmentService) {
     this.id = route.snapshot.params.id;
     this.getProfile(this.id);
  }

  getProfile(id) {
    this.enroll.getProfile(id).subscribe(Response => {this.profile = Response
    this.tag = JSON.parse(this.profile.tag)
    });
  }

  ngOnInit(): void {
  }

}
