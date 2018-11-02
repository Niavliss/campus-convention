import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormTopicComponent} from "./form-topic/form-topic.component";
import {TopicListComponent} from "./topic-list/topic-list.component";


const routes: Routes = [
  {path: 'form-topic', component: FormTopicComponent},
  {path: 'topic-list', component: TopicListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
