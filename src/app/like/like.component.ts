import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'persohub-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {

  @Input('isLiked') isLiked: boolean = false;
  @Input('likeCount') likeCount: number = 0;
  @Input('body') body: string;
  @Output('change') click = new EventEmitter();
  
  onClick(eventArgs) {
    this.isLiked = !this.isLiked;
    this.likeCount += this.isLiked ? +1 : -1;
    this.click.emit(eventArgs);
  }

}
