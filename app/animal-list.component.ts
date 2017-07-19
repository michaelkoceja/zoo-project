import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
  <option value="allAnimals">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="oldAnimals">Old Animals</option>
  </select>


  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | animalAge:filterByAge">{{currentAnimal.name}}
    <button (click)="updateButtonHasBeenClicked(currentAnimal)">Update</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  toggleAnimal(clickedAnimal: Animal, setCompleteness: boolean) {
    clickedAnimal.done = setCompleteness;
  }

  updateButtonHasBeenClicked(animalToUpdate: Animal) {
    this.clickSender.emit(animalToUpdate)
  }
}
