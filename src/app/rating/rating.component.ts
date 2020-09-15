import { RatingService } from './../rating.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  authors;

  constructor(rating: RatingService) {

    this.authors = rating.getAuthors();
   }

   action($event, value) { console.log($event, value);}

  ngOnInit() {

  }

}
