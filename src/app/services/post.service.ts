import { BadInput } from './../common/error-handling/bad-input';
import { AppError } from './../common/error-handling/app-error';
import { NotFoundError } from './../common/error-handling/not-found-error';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, fromEvent, throwError, Observable, scheduled, timer } from 'rxjs';
import { map, catchError, tap, concatMap, mapTo, switchMap, delay, retryWhen, finalize } from 'rxjs/operators';

export interface Post {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
  isRead?: boolean;
}

@Injectable({
  providedIn: "root",
})
export class PostService {
  private url = "http://jsonplaceholder.typicode.com/postsX";

  constructor(private http: HttpClient) { }



  getPosts() {
    return this.http
      .get<Post[]>(this.url)
      .pipe(
        catchError((err: Response) => {
          if (!err.ok && err.status === 400)
            return throwError(new BadInput(err))
          if (!err.ok && err.status === 404)
            return throwError(new NotFoundError(err));
          return throwError(new AppError(err));
        })
      );
  }

  createPost(post: Post) {
    return this.http
      .post<Post>(this.url, post);
  }

  updatePost(post: Partial<Post>) {
    return this.http
      .patch<Post>(this.url + '/' + post.id, post);
  }

  deletePost(id: number) {

    return this.http
      .delete<void>(this.url + '/' + id);
  }
}
