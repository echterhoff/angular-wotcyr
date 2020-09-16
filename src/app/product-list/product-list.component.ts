import { FavoriteChangedEventArgs } from './../favorite/favorite.component';
import { Component } from '@angular/core';

import { products } from '../products';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  post = {
    isFavorite: false
  };

  tweet = {
    isLiked: false,
    body: 'This is some body stuff...',
    likeCount: 10
  };

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed ', eventArgs);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/