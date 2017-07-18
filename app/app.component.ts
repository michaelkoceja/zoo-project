import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo Database as of {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>

    <animal-list [childAnimalList]="masterAnimalList"></animal-list>

    <hr>
      <div *ngIf="selectedAnimal">
        <h3>{{selectedAnimal.name}}</h3>
        <p>Animal Up to date?? {{selectedAnimal.done}}</p>
        <h3>Edit Animal Information</h3>
        <label>Enter Animal Name:</label>
        <input [(ngModel)]="selectedAnimal.name">
        <label>Enter Animal Family:</label>
        <input [(ngModel)]="selectedAnimal.family">
        <label>Enter Animal Age:</label>
        <input [(ngModel)]="selectedAnimal.age">
        <label>Enter Animal Sex:</label>
        <input [(ngModel)]="selectedAnimal.sex">
        <label>Enter Animal Likes:</label>
        <input [(ngModel)]="selectedAnimal.likes">
        <label>Enter Animal Dislikes:</label>
        <input [(ngModel)]="selectedAnimal.dislikes">
        <label>Enter Animal Location:</label>
        <input [(ngModel)]="selectedAnimal.location">
        <label>Enter Animal Caretakers:</label>
        <input [(ngModel)]="selectedAnimal.caretakers">
        <br>
        <button (click)="finishedUpdating()">Update</button>
     </div>
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
    new Animal('Lulu', 'Tiger', 4, 'Female', 'Likes to sunbath', 'Dislikes camera flashes', 'Sun Spot', 3),
    new Animal('Franky', 'Brown Bear', 2, 'Male', 'Likes swimming', 'Dislikes other bears', 'Solidarity', 5),
    new Animal('Puppy', 'Elephant', 7, 'Male', 'Likes chasing birds', 'Dislikes baths', 'Eastern Down Under', 4),
  ];

  updateAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
    // console.log("its working");
  }

  finishedUpdating() {
    this.selectedAnimal = null;
  }
}
