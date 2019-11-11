import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Complaint } from './models/compaint';
import { Observable } from 'rxjs';
import { Place } from './models/place';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  public places: Place[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data: { response: Complaint[] }) => {
          if(data.response == null) return;
          var place: string = "";

          if(data.response.length > 1){
            place = data.response[0].placeID;
          }
          else{
            return;
          }

          var places: { placeId: string, complaints: Complaint[] }[] = [{placeId: place, complaints: []}];

          data.response.map(complaint => {
            if(place == complaint.placeID) {
              places[places.length-1].complaints.push(complaint);
            }
            else {
              places.push({ placeId: complaint.placeID, complaints: [complaint] });
              place = complaint.placeID;
            }
          })
          
          this.places = places;
        });
  }

}
