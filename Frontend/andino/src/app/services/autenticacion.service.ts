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
    let header= new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})
                                .append("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept")
                                .append('Access-Control-Allow-Origin','*',)
                                .append('Access-Control-Allow-Methods','*');
  
    let body={"Nombre":usuario,"Contrasenya":password};

    return this.http.post(`${this.backend}/login`, body, {headers:header }).pipe(
      tap((response: any) => {
        const token = response['access_token'];
        if (token) {
          localStorage.setItem('authToken', token);
          console.log(localStorage.getItem('authToken'));
        }
      })
    );
  }

  RegistroUsuario(Nombre:string,ID_Robot:string,is_admin:string,Correo:string,rut:string,Región:string,Comuna:string,Contrasenya:string):Observable<any>{
    let header= new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})
                                .append("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept")
                                .append('Access-Control-Allow-Origin','*',)
                                .append('Access-Control-Allow-Methods','*');
  
    let body={"Nombre":Nombre,"is_admin":is_admin,"RUT":rut,"Correo":Correo,"Región":Región,"Comuna":Comuna,"Contrasenya":Contrasenya};
    return this.http.post(`${this.backend}/register`, body, {headers:header })
  }

  obtenerToken():string | null{
    return localStorage.getItem('authToken');
  }
}
