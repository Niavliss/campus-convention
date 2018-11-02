import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  topics = [
    {
      id :0,
      title: 'Côté rue',
      text: 'A respecter le voisinage.',
      topic: 'environement',
      countVote: 5

    },
    {
      id: 1,
      title: 'Respect du matériel',
      text: 'Ne pas dégrader ou voler du matériel au sein des locaux (en dehors c’est pas grave)',
      topic:'environement',
      countVote: 10

    },
    {
      id: 2,
      title: 'Coté repas',
      text: 'A rester dans la convivialité même si mon voisin mange quelque chose qui pue.',
      topic: 'cuisine',
      countVote: 2
    },
  ];


  constructor() { }

  public voteValue(id,value) {
    this.topics[id].countVote = this.topics[id].countVote + value;
  }

  addSubject(title: string, text: string, topic: string) {

    const subjectObject = {

      id: 0,

      title: '',

      text: '',

      topic:'',

      countVote:0

    };

    subjectObject.title = title;

    subjectObject.text = text;

    subjectObject.topic = topic;


    subjectObject.id = this.topics[(this.topics.length - 1)].id + 1;
   // console.log(subjectObject);
   // console.log(this.topics.length);
    this.topics.push(subjectObject);
    console.log(this.topics);

    //console.log(this.topics.length);



  }

}
