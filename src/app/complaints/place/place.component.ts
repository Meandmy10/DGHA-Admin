import { Component, OnInit, Input } from '@angular/core';
import { BasicComplaint } from '../models/basic-complaint';
import { ComplaintLocations } from '../models/complaint-locations';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() place: ComplaintLocations;

  constructor() { }

  ngOnInit() {
    console.log(this.place);
    
  }

}
