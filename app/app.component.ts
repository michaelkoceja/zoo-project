import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo Database as of {{month}}/{{day}}/{{year}}</h1>
    <!--- <h3>{{currentFocus}}</h3> --->
    <hr>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="updateAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (finishedButtonClickSender)="finishedUpdating()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Entered Animals';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
    new Animal('Lulu', 'Tiger', 4, 'Female', 'Carnivor', 'Likes to sunbath', 'Dislikes camera flashes', 'Sun Spot', 3),
    new Animal('Franky', 'Brown Bear', 2, 'Male', 'Carnivor', 'Likes swimming', 'Dislikes other bears', 'Solidarity', 5),
    new Animal('Puppy', 'Elephant', 7, 'Male', 'Herbivor', 'Likes chasing birds', 'Dislikes baths', 'Eastern Down Under', 4),
  ];

  updateAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
    // console.log("its working");
  }

  finishedUpdating() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
