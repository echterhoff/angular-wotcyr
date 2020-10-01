import { NotFoundComponent } from './not-found/not-found.component';
import { AppErrorHandler } from './common/error-handling/app-error-handler';
import { PostService } from './services/post.service';
import { TitleCasePipe } from "./titleinput/title-case.pipe";
import { SummaryPipe } from "./rating/summary.pipe";
import { RatingService } from "./rating.service";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { RatingComponent } from "./rating/rating.component";
import { FavoriteComponent } from "./favorite/favorite.component";
import { TitleinputComponent } from "./titleinput/titleinput.component";
import { LikeComponent } from "./like/like.component";
import { PanelComponent } from "./panel/panel.component";
import { TrackbyComponent } from "./trackby/trackby.component";
import { InputFormatDirective } from "./input-format.directive";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ComplexFormComponent } from "./complex-form/complex-form.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { PostsComponent } from "./posts/posts.component";
import { PostContentComponent } from './post-content/post-content.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "posts", component: PostsComponent },
      { path: "post/:id/:title", component: PostContentComponent },
      { path: "**", component: NotFoundComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    RatingComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleinputComponent,
    TitleCasePipe,
    LikeComponent,
    PanelComponent,
    TrackbyComponent,
    InputFormatDirective,
    ContactFormComponent,
    ComplexFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    PostContentComponent,
    NotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CartService,
    RatingService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
