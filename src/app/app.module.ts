import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopicsComponent } from './topics/topics.component';
import {TopicsService} from "./services/topics.service";

import { TopicListComponent } from './topic-list/topic-list.component';
import { FormTopicComponent } from './form-topic/form-topic.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    TopicListComponent,
    FormTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TopicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
