import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintLocations } from './models/complaint-locations';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  public places: ComplaintLocations;
  public Loading: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.Loading = true;

    // Wait for getComplaints to complete before hiding spinner
    this.getComplaints().then(() => {
      this.Loading = false;
    });
  }

  getComplaints() {
    return new Promise(resolve => {
      resolve(this.route.data
        .subscribe((data: { response: ComplaintLocations }) => {
          if (data.response == null) return;
          this.places = data.response;
        }));
    });
  }
}
