import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <p>Animal Up to date?? {{childSelectedAnimal.done}}</p>
      <h3>Edit Animal Information</h3>
      <li>
        <label>Enter Animal Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name">
      </li>
      <li>
        <label>Enter Animal Family:</label>
        <input [(ngModel)]="childSelectedAnimal.family">
      </li>
      <li>
        <label>Enter Animal Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age">
      </li>
      <li>
        <label>Enter Animal Sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex">
      </li>
      <li>
        <label>Enter Animal Likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes">
      <li>
        <label>Enter Animal Dislikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes">
      </li>
      <li>
        <label>Enter Animal Location:</label>
        <input [(ngModel)]="childSelectedAnimal.location">
      </li>
      <li>
        <label>Enter Animal Caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers">
      </li>
      <br>
      <button (click)="finishedButtonClicked()">Update</button>
   </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() finishedButtonClickSender = new EventEmitter();

  finishedButtonClicked() {
    this.finishedButtonClickSender.emit();
  }
}
