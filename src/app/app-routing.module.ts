import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponentComponent } from './create-post-component/create-post-component.component';

const routes: Routes = [
 // {path: 'create', component: CreatePostComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
