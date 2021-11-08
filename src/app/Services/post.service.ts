import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../create-post-component/Models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postUptaded = new Subject<Post[]>();

  constructor() { }

  addPost(post: Post){
    this.posts.push(post);

    //Generar notificacion de actualizacion a los componentes suscritos al Subject
    this.postUptaded.next([...this.posts]);
  }

  getPostUpdateListener(){
    return this.postUptaded.asObservable();
  }
}
