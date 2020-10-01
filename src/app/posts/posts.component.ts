import { map, switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BadInput } from './../common/error-handling/bad-input';
import { NotFoundError } from './../common/error-handling/not-found-error';
import { AppError } from './../common/error-handling/app-error';
import { Post, PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";
import { AppErrorHandler } from '../common/error-handling/app-error-handler';

@Component({
  selector: "persohub-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(
    private route: ActivatedRoute,
    private service: PostService
  ) { }

  ngOnInit() {

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      map((combined) => {
        let id = combined[0].get('id');
        let page = combined[1].get('page');

        return this.service.getAll();
      })
    ).subscribe((combined) => {
      console.log(combined);
    }
    );

    let page = this.route.queryParamMap.subscribe(
      (params) => { params.get('page'); }
    );

    let sub = this.service.getAll()
      .subscribe((posts) => { this.posts = posts });
  }

  createPost(input: HTMLInputElement) {
    let post: Post = {
      id: -1,
      title: input.value,
      body: null,
      userId: null
    };
    input.disabled = true;
    this.posts.splice(0, 0, post);

    this.service.create(post)
      .subscribe(
        (newPost) => {
          post.id = newPost.id;
          // post.userId = response.userId;
          input.disabled = false;
          input.value = "";
          input.focus();
          // console.log(createdPost);
          // console.log(post);
        },
        (error: AppError) => {
          // this.posts.splice(0,1);
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);

          input.disabled = false;
          input.focus();
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else if (error instanceof NotFoundError) {
            console.log('Not found');
          }
          else throw error;

        });
  }

  updatePost(post: Post) {
    post.isRead = true;
    this.service.update(post)
      .subscribe(
        (updatedPost) => {
          console.log(updatedPost);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else if (error instanceof NotFoundError) {
            console.log('Not found');
          }
          else throw error;

        });

    // post.isRead = true;
    // this.http.put<Post>(this.url, post).subscribe(response => {});
  }

  deletePost(post: Post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id)
      .subscribe(
        () => {
          console.log('Successful deleted!');
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            // console.log('Not found');
          } else if (error instanceof AppError) {
            console.log('Undo because of error');
            this.posts.splice(index, 0, post);
          }
          else throw error;
        });
  }
}
