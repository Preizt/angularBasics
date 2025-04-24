import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  //properties
  firstName: string = '';
  LastName: string = '';

  register() {
    alert(this.firstName);
  }

  onFirstNameChange(fname: any) {
    console.log(fname.target.value);
    this.firstName = fname.target.value;
  }

  lastNameClick(lastName: any) {
    this.LastName = lastName.target.value;
    // console.log(lastName.value);

    alert(lastName.value);
  }
}
