import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Router} from '@angular/router';
import { Subject } from 'rxjs';
import { Post } from '../create-post-component/Models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000/api/posts';

  posts: Post[] = [];
  postUptaded = new Subject<Post[]>();

  constructor(private router: Router, private http: HttpClient) { }

  addPost(post: Post){

    this.http.post<{message: string}>(this.url,post).subscribe((response)=>{
      console.log(response);
      this.posts.push(post);
      //Generar notificacion de actualizacion a los componentes suscritos al Subject
    this.postUptaded.next([...this.posts]);
    this.router.navigate(['/']);
    });
  }

  getPost(){
    this.http.get<Post[]>(this.url).subscribe((response) => {
      console.log(response);
      this.posts = response;
      this.postUptaded.next([...this.posts]);
    });
  }

  getPostUpdateListener(){
    return this.postUptaded.asObservable();
  }
}
