import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Complaint } from './models/compaint';
import { Observable } from 'rxjs';
import { Place } from './models/place';
import { BasicComplaint } from './models/basic-complaint';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  public places: Record<string,Record<string, BasicComplaint[]>>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: { response: Record<string,Record<string, BasicComplaint[]>> }) => {
          if(data.response == null) return;
          var place: string = "";
          
          this.places = data.response;

        //   .

        //   if(data.response.length > 1){
        //     place = data.response[0].placeID;
        //   }
        //   else{
        //     return;
        //   }

        //   var places: { placeId: string, complaints: Complaint[] }[] = [{placeId: place, complaints: []}];

        //   data.response.map(complaint => {
        //     if(place == complaint.placeID) {
        //       places[places.length-1].complaints.push(complaint);
        //     }
        //     else {
        //       places.push({ placeId: complaint.placeID, complaints: [complaint] });
        //       place = complaint.placeID;
        //     }
        //   })
        });
  }

}
