import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import{NgForm} from '@angular/forms';
import { Post } from './Models/post.models';

@Component({
  selector: 'app-create-post-component',
  templateUrl:'./create-post-component.component.html',
  styleUrls: ['./create-post-component.component.css']
})
export class CreatePostComponentComponent implements OnInit {
  content: string = 'Hola a todos';
  texto: string = '';
  @Output() addPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {}

  showText(){
    this.content = this.texto;
  }

  createPost(form: NgForm){
    if(form.valid){
      this.addPost.emit(form.value);
      form.resetForm;
    }

  }
}
