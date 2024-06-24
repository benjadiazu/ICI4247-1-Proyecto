import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private backend: string

  constructor(private http:HttpClient) {
    this.backend = environment.api;
  }

  IniciarSesion(usuario:string,password:string):Observable<any>{
    let headers= new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})
                                .append("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept")
                                .append('Access-Control-Allow-Origin','*',)
                                .append('Access-Control-Allow-Methods','*');
  
    let body={"usuario":usuario,"password":password};
    return this.http.post(`${this.backend}/login`, body, { headers }).pipe(
      tap((response: any) => {
        const token = response.token;
        if (token) {
          localStorage.setItem('authToken', token);
        }
      })
    );
  }

  RegistroUsuario(usuario:string,correo:string,rut:string,region:string,comuna:string,password:string):Observable<any>{
    let headers= new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})
                                .append("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept")
                                .append('Access-Control-Allow-Origin','*',)
                                .append('Access-Control-Allow-Methods','*');
  
    let body={"usuario":usuario,"correo":correo,"rut":rut,"region":region,"comuna":comuna,"password":password};
    return this.http.post(`${this.backend}/register`, body, { headers })
  }

  obtenerToken():string | null{
    return localStorage.getItem('authToken');
  }
}
