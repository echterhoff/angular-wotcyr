import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

constructor() { }
  getAuthors() {

    return ['Simon', 'Lars'];

  }
}