import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo Database as of {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li>{{firstAnimal.type}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Entered Animals';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  firstAnimal = {
    type: "Tiger"
  }
}
