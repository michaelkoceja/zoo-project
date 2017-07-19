import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h3>New Animal</h3>
    <div>
      <ul>
      <li>
       <label>Enter the animals name:</label>
       <input #newName>
      </li>
      <li>
       <label>What is the animals family(species)?:</label>
       <input #newFamily>
      </li>
      <li>
       <label>Enter the animals age:</label>
       <input #newAge>
      </li>
      <li>
       <label>Enter the animals sex:</label>
       <input #newSex>
      </li>
      <li>
       <label>Enter the animals diet:</label>
       <input #newDiet>
      </li>
      <li>
       <label>What does the animal like to do?:</label>
       <input #newLikes>
      </li>
      <li>
       <label>What does the animal dislike?:</label>
       <input #newDislikes>
      </li>
      <li>
       <label>Where will the animal live?:</label>
       <input #newLocation>
      </li>
      <li>
       <label>How many caretakers does the animal require?:</label>
       <input #newCaretakers>
      </li>
       <button (click)="submitForm(newName.value, newFamily.value, newAge.value, newSex.value, newDiet.value, newLikes.value, newDislikes.value, newLocation.value, newCaretakers.value)">Add</button>
     </ul>
   </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(name: string, family: string, age: number, sex: string, diet: string, likes: string, dislikes: string, location: string, caretakers: number) {
    var newAnimalToAdd: Animal = new Animal(name, family, age, sex, diet, likes, dislikes, location, caretakers);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
