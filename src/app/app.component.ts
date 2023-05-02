import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { concatMap, delay, exhaustMap, fromEvent, map, merge, mergeMap, switchMap } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild("btn") btn!: ElementRef;
  API = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  ngAfterViewInit(): void {

    fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        exhaustMap(() => this.http.get(`${this.API}/posts/2`).pipe(delay(1000)))
      )

      .subscribe(res => console.log(res));
  }


  callApi() {
    this.http.get(`${this.API}/posts/2`)
      .pipe(
        exhaustMap((post: any) => {
          return this.http.get(`${this.API}/users/${post?.userId}`).pipe(map(user => {
            return {
              post,
              user
            }
          }))
        })
      ).pipe(delay(2000))
      .subscribe(res => {
        console.log(res);

      });

  }

  ngOnInit(): void {


  }

}
