import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  user: any;

  constructor(private router: Router) {

    this.user = {
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    };
   }

  ngOnInit() {
  }

  cadastrar() {
    const storage = window.localStorage;

    storage.setItem('user', JSON.stringify(this.user));

    this.router.navigate(['/login']);

    //this.toastr.success('Usuário cadastrado', 'Sucesso!', { timeOut: 3000, positionClass: 'toast-top-right' });
    alert("Cadastrado com sucesso");
  }
}
