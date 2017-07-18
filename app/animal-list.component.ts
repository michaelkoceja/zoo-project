import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li (click)="upToDate(currentAnimal)" *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}} <button (click)="updateAnimal(currentAnimal)">Update</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];

  upToDate(updatedAnimal) {
    if(updatedAnimal.done === true) {
      console.log("updated!!!!");
    } else {
      console.log("animal is not updated");
    }
  }
}
