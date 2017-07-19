import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <!-- <p>Animal Up to date?? {{childSelectedAnimal.done}}</p> --->
      <h5>Edit Animal Information</h5>
      <li>
        <label>Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name">
      </li>
      <li>
        <label>Family:</label>
        <input [(ngModel)]="childSelectedAnimal.family">
      </li>
      <li>
        <label>Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age">
      </li>
      <li>
        <label>Sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex">
      </li>
      <li>
        <label>Diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet">
      </li>
      <li>
        <label>Likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes">
      <li>
        <label>Dislikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes">
      </li>
      <li>
        <label>Location:</label>
        <input [(ngModel)]="childSelectedAnimal.location">
      </li>
      <li>
        <label>Caretakers:</label>
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
