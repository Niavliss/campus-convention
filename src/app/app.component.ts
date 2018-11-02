import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval} from "rxjs/internal/observable/interval";
import {Subscription} from "rxjs/internal/Subscription";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'campus-convention';
  secondes: number;
  counterSubscription: Subscription;


  ngOnInit() {
    const counter = interval(1000);

    this.counterSubscription = counter.subscribe(

      (value) => {

        this.secondes = value;

      },

      (error) => {

        console.log('Uh-oh, an error occurred! : ' + error);

      },

      () => {

        console.log('Observable complete!');

      }

    );

  }

  ngOnDestroy(): void {
  }
}
