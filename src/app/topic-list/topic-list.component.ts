import { Component, OnInit } from '@angular/core';
import {TopicsService} from "../services/topics.service";


@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  topics: any[];
  constructor(private topicsService: TopicsService ) { }

  ngOnInit() {
    this.topics = this.topicsService.topics;
  }

}
