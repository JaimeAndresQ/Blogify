import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../create-post-component/Models/post.models';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSub: Subscription;

  constructor(public postService: PostService) {
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) =>{
      this.posts = posts;
    });
   }

  ngOnInit(): void {
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) =>{
    this.posts = posts;});
    this.postService.getPost();
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

}
