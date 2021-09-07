import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private ApiUrl: string = environment.ApiUrl;

  constructor( private http: HttpClient) { }

  getHeroes() :Observable <Heroe[]>{
     return this.http.get<Heroe[]>(`${ this.ApiUrl}/heroes`);
  }


  getHeroePorId( id: string) :Observable <Heroe>{
    return this.http.get<Heroe>(`${ this.ApiUrl}/heroes/${id}`);
 }

  getsugerencias(termino: string):Observable <Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.ApiUrl}/heroes?q=${ termino }&_limit=6`);
  }

    agregarHeroe(heroe: Heroe):Observable <Heroe>{
      return this.http.post<Heroe>(`${ this.ApiUrl}/heroes`,heroe);

    }


    actualizarHeroe( heroe: Heroe):Observable <Heroe>{
      return this.http.put<Heroe>(`${ this.ApiUrl}/heroes/${heroe.id }`,heroe);

    }

    borrarHeroe(id: string):Observable <any>{
      return this.http.delete<any>(`${ this.ApiUrl}/heroes/${id }`);

    }
}
