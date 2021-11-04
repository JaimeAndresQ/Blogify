import { Component } from '@angular/core';
import { Post } from './create-post-component/Models/post.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = [];

  title = 'blogify';

  savePost(post: Post){
    this.storedPosts.push(post);
  }
}
