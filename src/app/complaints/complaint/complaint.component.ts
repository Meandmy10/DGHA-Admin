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
  public Loading: boolean;
  edited: boolean;
  private originalStatus: string;


  constructor(public complaintsService: ComplaintsService) { }

  ngOnInit() {
    this.timeAdded = parseISO(this.complaint.timeSubmitted);
    this.lastUpdated = parseISO(this.complaint.timeLastUpdated);
    this.originalStatus = this.complaint.status;
  }

  onSubmit() {
    this.Loading = true;
    
    //focus on loading element
    const focusElement = document.getElementById(`#loading.${this.complaint.placeID}.${this.complaint.userID}`) as HTMLElement
    if (focusElement) {
      focusElement.tabIndex = -1;
      focusElement.focus();
    }

    if(this.complaint.status == "Newly Created"){
      this.complaint.status = "Pending";
    }

    this.complaintsService.PutComplaint(this.complaint.placeID, this.complaint.userID, this.complaint.timeSubmitted, this.complaint).subscribe(complaint => {
      console.log("Complaint Updated", complaint);
      this.complaint.status = complaint.status;
      this.complaint.comment = complaint.comment;
      this.complaint.timeLastUpdated = complaint.timeLastUpdated;
      this.lastUpdated = parseISO(this.complaint.timeLastUpdated);
      
      if(complaint.status != this.originalStatus){
        this.deleted.emit(this.complaint);
      }
      else{
        this.Loading = false;
        this.edited = false;
      }
    });
  }

  onClick() {
    this.Loading = true;
    
    //focus on loading element
    const focusElement = document.getElementById(`loading.${this.complaint.placeID}.${this.complaint.userID}`) as HTMLElement
    if (focusElement) {
      focusElement.tabIndex = -1;
      focusElement.focus();
    }

    this.complaintsService.DeleteComplaint(this.complaint.placeID, this.complaint.userID, this.complaint.timeSubmitted).subscribe(complaint => {
      console.log("Complaint Deleted", complaint);
      this.deleted.emit(this.complaint);
    });
  }

  public onChange(){
    this.edited = true;
  }
}
