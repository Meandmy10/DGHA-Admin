import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Complaint } from './models/compaint';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: { response: Observable<Complaint[]> }) => {
          console.log(data.response);
          // this.editName = data.crisis.name;
          // this.crisis = data.crisis;
        }, error => {
          console.log("should be right?");
        });
  }

}
