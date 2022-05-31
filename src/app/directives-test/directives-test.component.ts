import { Component } from '@angular/core';

@Component({
  selector: 'drvt-test',
  templateUrl: 'directives-test.component.html',
  styleUrls: ['./directives-test.component.css'],
})
export class DirectivesTestComponent {
  buttonClicked = false;
  clickCount = 0;
  clickArr = [];
  onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
    this.clickCount += 1;
    this.clickArr.push(new Date());
    console.log(this.clickCount);
  }
}
