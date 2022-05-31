import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: 'directives.component.html',
})
export class DirectivesComponent {
  buttonClicked = false;
  onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }
}
