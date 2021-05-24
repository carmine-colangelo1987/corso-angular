import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Post { 
  prova: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular';

  constructor(private http: HttpClient) {}

  onGet () {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      posts => console.log(posts),
      err => console.log('err',err),
      () => console.log('Complete')
    )
  }

  onPost (postData: Post = { prova: 'Questa è una prova!' }) {
    this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      postData
      ).subscribe(
      posts => console.log(posts),
      err => console.log('err',err),
      () => console.log('Complete')
    )
  }

  onPut (postId: number = 1 , postData: Post = { prova: 'Questa è una prova!' }) {
    this.http.put(
      'https://jsonplaceholder.typicode.com/posts/' + postId,
      postData
      ).subscribe(
      posts => console.log(posts),
      err => console.log('err',err),
      () => console.log('Complete')
    )
  }

  onDelete (postId: number = 1) {
    this.http.delete('https://jsonplaceholder.typicode.com/posts/' + postId).subscribe(
      posts => console.log(posts),
      err => console.log('err',err),
      () => console.log('Complete')
    )
  }
}
