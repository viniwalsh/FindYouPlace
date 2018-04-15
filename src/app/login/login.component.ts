import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public pass;
  public user: any;

  constructor( private router: Router) {

    this.user = {
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    };

  }

  ngOnInit() {
  }

  login() {
    var login = JSON.parse(localStorage.getItem('user'));

    if (login.email == this.user.email && login.password == this.user.password){
      alert("Logado com sucesso!")
      this.router.navigate(['/index']);
    }else{
      alert("login ou senha incorretos");
    }

  }
}
