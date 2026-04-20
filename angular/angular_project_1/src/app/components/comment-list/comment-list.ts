import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  imports: [CommonModule],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentData: Observable<Comment[]> | undefined;

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.commentData = this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
