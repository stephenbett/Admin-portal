import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  credentials = { 
    username: '',
    password: '',
    grant_type :'password'
  };

  loginFailed ! :boolean;
  loginSuccessful!: boolean;

  ngOnInit(): void {
    this.login()
  }

  login(){}
}
