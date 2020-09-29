import { BadInput } from './../common/error-handling/bad-input';
import { NotFoundError } from './../common/error-handling/not-found-error';
import { AppError } from './../common/error-handling/app-error';
import { Post, PostService } from "./../services/post.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "persohub-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private service: PostService) { }

  ngOnInit() {

    let sub = this.service.getPosts()
      .subscribe(
        (response) => {
          this.posts = response;
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          if (error instanceof NotFoundError) {
            console.log('Not found');
          }
          // alert('Unexpected error!');
          // console.log(error);
        },
        () => {
          console.log("Finished");
        });
  }

  createPost(input: HTMLInputElement) {
    let post: Post = {
      title: input.value,
    };
    input.disabled = true;

    this.service.createPost(post)
      .subscribe(
        (response) => {
          post.id = response.id;
          // post.userId = response.userId;
          this.posts.unshift(response);
          input.disabled = false;
          input.value = "";
          input.focus();
          // console.log(response);
          // console.log(post);
        },
        (error: Response) => {
          if (error.status === 400) {
            // this.form.setErrors(error.json());
          }
          else {

            console.log("Ein Fehler ist aufgetreten.");
            alert("Verbindungsprobleme!");
          }
          input.disabled = false;
          input.focus();
        });
  }

  updatePost(post: Post) {
    this.service.updatePost({ isRead: true })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          alert('Unexpected error!');
          console.log(error);
        });

    // post.isRead = true;
    // this.http.put<Post>(this.url, post).subscribe(response => {});
  }
  deletePost(post: Post) {
    this.service.deletePost(post.id)
      .subscribe(
        (response) => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if (error.status === 404)
            alert('This post has not been found on the server.')
          else
            alert('Unexpected error!');
          console.log(error);
        });
  }
}
