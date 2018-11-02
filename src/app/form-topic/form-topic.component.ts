import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {TopicsService} from "../services/topics.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-topic',
  templateUrl: './form-topic.component.html',
  styleUrls: ['./form-topic.component.css']
})
export class FormTopicComponent implements OnInit {
  topics: any[];
  constructor(private topicsService: TopicsService,
              private router: Router) { }

  onSubmit(form: NgForm) {
    const title = form.value['title'];

    const text = form.value['text'];

    const topic = form.value['category'];

    this.topicsService.addSubject(title,text,topic);

    this.router.navigate;
  }


  ngOnInit() {
  }

}
