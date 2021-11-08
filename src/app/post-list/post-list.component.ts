import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../create-post-component/Models/post.models';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.posts;
  }

  ngOnDestroy(): void {}
}
