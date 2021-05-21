import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  disableAddComment = true
  sectionTitle = 'Lista dei post'
  post = {
    title: 'Giorno 1 del corso di Angular',
    comment: "Come funziona il databinding",
    liked: false
  }
  
  constructor() {
    setTimeout(() => {
      this.disableAddComment = false
    }, 2000)
  }

  ngOnInit(): void {
  }

  onClickedLike () {
    this.post.liked = !this.post.liked
  }

}
