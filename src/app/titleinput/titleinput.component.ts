import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titleinput',
  templateUrl: './titleinput.component.html',
  styleUrls: ['./titleinput.component.css']
})
export class TitleinputComponent implements OnInit {

  myTitle: string = '';
  myCleanTitle: string = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyUp() {
    this.myCleanTitle = this.myTitle.toUpperCase();
  }

}
