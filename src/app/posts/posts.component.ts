import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: "persohub-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    let sub = this.http
      .get<Post[]>("http://jsonplaceholder.typicode.com/posts")
      .subscribe(
        (response) => {
          this.posts = response;
        },
        (error) => {},
        () => {
          console.log("Finished");
        }
      );

  }
}
