import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponentComponent } from './create-post-component/create-post-component.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create', component: CreatePostComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
