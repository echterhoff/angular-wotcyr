import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FavoriteChangedEventArgs{
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input('isFavorite') isActive: boolean = false;
  @Output('change') click = new EventEmitter();

  favtoggle(actualsvg: HTMLElement){
    this.isActive = !this.isActive;
    this.click.emit({ newValue: this.isActive });
  }

  

}
