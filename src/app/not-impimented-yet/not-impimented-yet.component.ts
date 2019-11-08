import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-not-impimented-yet',
  templateUrl: './not-impimented-yet.component.html',
  styleUrls: ['./not-impimented-yet.component.css']
})
export class NotImpimentedYetComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  
  goBack(){
    this.location.back();
  }

}
