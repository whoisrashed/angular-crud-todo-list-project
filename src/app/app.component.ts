import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { BlogPostService } from './blog-post.service';
import { Post } from './model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  posts$!:Observable< Post[]>;

  private destroy$: Subject<void> = new Subject();

  blogPost = inject(BlogPostService)
  constructor() {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {



   this.posts$= this.blogPost.getPosts()
     


  }


}
