import {Component, Input, OnInit} from '@angular/core';
import {TopicsService} from "../services/topics.service";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  @Input()
  topic: any;
  voteValue: any;
  @Input()
  id: any;

  constructor(private topicsService: TopicsService ) {

  }


  ngOnInit() {

  }
  public voteGood(i){
    this.topicsService.voteValue(i,1);

  }

  public voteBad(i){
    this.topicsService.voteValue(i,-1);

  }

}
