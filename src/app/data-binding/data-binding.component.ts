import { Component } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {
  username = '';
  usernameIsEmpty = true;

  onUpdateUser() {
    if (this.username != '') {
      this.usernameIsEmpty = false;
    }

    if (this.username == '') {
      this.usernameIsEmpty = true;
    }
  }

  resetUserName() {
    this.username = '';
  }
}
