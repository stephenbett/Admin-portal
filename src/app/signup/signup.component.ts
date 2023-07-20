import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = {
    AdminNo: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  };

  confirmPassword = '';
  passwordMismatch = false;

  checkPasswordMatch() {
    this.passwordMismatch = this.user.Password !== this.confirmPassword;
  }
  register() {
    // Perform registration logic here
    console.log('User registered:', this.user);
  }

}
