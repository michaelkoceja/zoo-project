import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo Database as of {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li (click)="upToDate(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.name}} <button (click)="updateAnimal()">Update</button></li>
    </ul>
    <hr>
      <div>
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
  animals: Animal[] = [
    new Animal('Lulu', 'Tiger', 4, 'Female', 'Likes to sunbath', 'Dislikes camera flashes', 'Sun Spot', 3),
    new Animal('Franky', 'Brown Bear', 2, 'Male', 'Likes swimming', 'Dislikes other bears', 'Solidarity', 5),
    new Animal('Puppy', 'Elephant', 7, 'Male', 'Likes chasing birds', 'Dislikes baths', 'Eastern Down Under', 4),
  ];
  selectedAnimal: Animal = this.animals[0];

  updateAnimal(){
    console.log("its working");
  }

  upToDate(updatedAnimal) {
    if(updatedAnimal.done === true) {
      console.log("updated!!!!");
    } else {
      console.log("animal is not updated");
    }
  }
}

export class Animal {
  public done: boolean = false;
  constructor(public name: string, public family: string, public age: number, public sex: string, public likes: string, public dislikes: string, public location: string, public caretakers: number) { }
}
