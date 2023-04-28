import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<Post[]>{
   return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
