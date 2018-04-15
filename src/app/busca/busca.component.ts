import { Component, OnInit, Input } from '@angular/core';
import * as googlemaps from '../../assets/js/locais.js';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
 
    locais:any[];

    constructor(private http:Http, private route:ActivatedRoute) { 
    }
  
    ngOnInit() {
      const tipo = this.route.snapshot.paramMap.get('tipo');
      this.buscar(tipo);
      console.log(tipo);
    }
  
    buscar(tipo):Subscription{
    return this.http.get("http://localhost:3000/" + tipo).subscribe(response => this.locais = response.json());
    }
  }
