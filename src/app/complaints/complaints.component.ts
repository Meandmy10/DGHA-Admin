import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintsLocation } from './models/complaint-locations';
import { Complaint } from './models/compaint';
import { ComplaintsService } from './services/complaints.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  public places: ComplaintsLocation[] = [];
  public loading: boolean;
  public resolvedComplaints: Complaint[] = [];

  constructor(private route: ActivatedRoute, private complaintsService: ComplaintsService) { }

  ngOnInit() {
    this.route.data.subscribe((data: { response: ComplaintsLocation[] }) => {
      if (data.response == null) return;
      this.places = data.response;
    });
  }

  onLocationDeleted(place: ComplaintsLocation) {
    const deletedPlace = this.places.find(c => c.placeId == place.placeId);
    console.log(deletedPlace);
    this.places.splice(this.places.indexOf(deletedPlace),1);
  }
  
  onClick(){
    this.loading = true;
    this.complaintsService.GetResolvedComplaints().subscribe(complaints => {
      this.resolvedComplaints = complaints;
      console.log(complaints);
      this.loading = false;
    })
  }

  getButtonText(): string{
    if(this.resolvedComplaints.length < 1) {
      return "Get";
    }
    else{
      return "Refresh";
    }
  }

  onComplaintDelete(complaint: Complaint){
    const deletedComplaint = this.resolvedComplaints.find(c => c.placeID == complaint.placeID && c.userID == complaint.userID && c.timeSubmitted == complaint.timeSubmitted);
    console.log(deletedComplaint);
    this.resolvedComplaints.splice(this.resolvedComplaints.indexOf(deletedComplaint),1);
  }
}
