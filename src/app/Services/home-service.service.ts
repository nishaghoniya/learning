import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  result: any
  // public isLoading$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {
    // this.isLoading$.next(true);
  }

  getProductData() {
    this.result = this.http.get("http://universities.hipolabs.com/search?country=United+States")
    return this.result
  }

  // getLoading(): Observable<boolean> {
  //   console.log(this.isLoading$)
  //   return this.isLoading$;
  // }

}
