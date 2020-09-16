import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FavoriteChangedEventArgs{
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isActive: boolean = false;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  favtoggle(actualsvg: HTMLElement){
    this.isActive = !this.isActive;
    this.change.emit({ newValue: this.isActive });
  }

  

}
