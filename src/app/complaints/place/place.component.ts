import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComplaintsLocation as ComplaintsLocation } from '../models/complaint-locations';
import { Complaint } from '../models/compaint';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() place: ComplaintsLocation;
  @Output() deleted: EventEmitter<ComplaintsLocation> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleted(complaint: Complaint) {
    const deletedComplaint = this.place.complaints.find(c => c.placeID == complaint.placeID && c.userID == complaint.userID && c.timeSubmitted == complaint.timeSubmitted);
    this.place.complaints.splice(this.place.complaints.indexOf(deletedComplaint),1);
    if(this.place.complaints.length < 1) {
      this.deleted.emit(this.place);
    }
  }
}
