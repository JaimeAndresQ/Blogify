import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../create-post-component/Models/post.models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
@Input() posts: Post[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
