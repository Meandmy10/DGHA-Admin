import { Component, OnInit, Input } from '@angular/core';
import { ComplaintLocations } from '../models/complaint-locations';
import { Complaint } from '../models/compaint';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() place: ComplaintLocations;

  constructor() { }

  ngOnInit() {
  }

  onDeleted(complaint: Complaint) {
    const deletedComplaint = this.place.complaints.find(c => c.placeID == complaint.placeID && c.userID == complaint.userID && c.timeSubmitted == complaint.timeSubmitted);
    console.log(deletedComplaint)
    this.place.complaints.splice(this.place.complaints.indexOf(deletedComplaint),1);
  }

}
