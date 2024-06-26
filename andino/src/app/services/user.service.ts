import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backend: string

  constructor(private http:HttpClient) {
    this.backend = environment.api;
  }
  
  getUserInfo(): Observable<any>{
    let token= localStorage.getItem('authToken')
    let header= new HttpHeaders({'Content-Type':'application/json;charset=utf-8','Authorization': `Bearer ${token}`})
                                .append("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept")
                                .append('Access-Control-Allow-Origin','*',)
                                .append('Access-Control-Allow-Methods','*');

    // console.log(token)
    return this.http.post(`${this.backend}/user/get`,{},{headers:header })
  }
}
