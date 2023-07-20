import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  url:string='https://jsonplaceholder.typicode.com'

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url + '/posts');
  }
}
