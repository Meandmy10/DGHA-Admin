import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Complaint } from '../models/compaint';
import { ComplaintsService } from '../services/complaints.service';
import { parseISO } from 'date-fns';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  @Input() complaint: Complaint;
  @Output() deleted: EventEmitter<Complaint> = new EventEmitter();
  timeAdded: Date;
  lastUpdated: Date;

  constructor(public complaintsService: ComplaintsService) { }

  ngOnInit() {
    this.timeAdded = parseISO(this.complaint.timeSubmitted);
    this.lastUpdated = parseISO(this.complaint.timeLastUpdated);
    console.log(this.complaint);
  }

  onSubmit() {
    this.complaintsService.PutComplaint(this.complaint.placeID, this.complaint.userID, this.complaint.timeSubmitted, this.complaint).subscribe(complaint => {
      console.log("Complaint Updated", complaint);
      this.complaint = complaint;
      this.lastUpdated = parseISO(this.complaint.timeLastUpdated);
    });
  }

  onClick(){
    this.complaintsService.DeleteComplaint(this.complaint.placeID, this.complaint.userID, this.complaint.timeSubmitted).subscribe(complaint => {
      console.log("Complaint Deleted", complaint);
      this.deleted.emit(complaint);
    })
  }

}
