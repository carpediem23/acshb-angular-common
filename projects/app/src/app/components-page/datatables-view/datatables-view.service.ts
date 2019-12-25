import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatatablesViewService {
  enpoint = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get(this.enpoint);
  }
}
