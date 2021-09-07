import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  ApiUrl: string = environment.ApiUrl;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth!}
  }

  constructor( private htpp: HttpClient) { }
  

  login(){
    return this.htpp.get<Auth>(` ${ this.ApiUrl}/usuarios/1`)
            .pipe(
              tap(auth => this._auth = auth)
              );
  }
}
