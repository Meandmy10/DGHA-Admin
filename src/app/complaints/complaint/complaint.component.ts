import { Component, OnInit, Input } from '@angular/core';
import { Complaint } from '../models/compaint';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  @Input() complaint: Complaint;

  constructor() { }

  ngOnInit() {
    this.complaint = new Complaint(this.complaint);
  }

}
