import { DataService } from './data.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  isRead?: boolean;
}

@Injectable({
  providedIn: "root",
})
export class PostService extends DataService<Post>{
  constructor(http: HttpClient) { 
    super("http://jsonplaceholder.typicode.com/posts", http);
  }


}
