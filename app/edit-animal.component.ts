import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>{{childSelectedAnimal.name}}</h3>
      <p>Animal Up to date?? {{childSelectedAnimal.done}}</p>
      <h3>Edit Animal Information</h3>
      <label>Enter Animal Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Enter Animal Family:</label>
      <input [(ngModel)]="childSelectedAnimal.family">
      <label>Enter Animal Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Enter Animal Sex:</label>
      <input [(ngModel)]="childSelectedAnimal.sex">
      <label>Enter Animal Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes">
      <label>Enter Animal Dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
      <label>Enter Animal Location:</label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <label>Enter Animal Caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
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
