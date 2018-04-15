import { CadastroComponent } from './cadastro/cadastro.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SobreComponent } from './sobre/sobre.component';
import { IndexComponent } from './index/index.component';
import { BuscaComponent } from './busca/busca.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';

export const routes = [
    {path:'resultados', component: ResultadosComponent},
    {path: 'busca', component: BuscaComponent},
    {path: 'busca/:tipo', component: BuscaComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastrar', component: CadastroComponent},
    {path: '**', component: IndexComponent},
    {path: '', component: IndexComponent},
]