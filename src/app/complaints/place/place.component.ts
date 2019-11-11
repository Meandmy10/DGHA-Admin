import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../models/place';
import { BasicComplaint } from '../models/basic-complaint';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() place: Record<string, BasicComplaint[]>;

  constructor() { }

  ngOnInit() {
    console.log(this.place);
    
  }

}
