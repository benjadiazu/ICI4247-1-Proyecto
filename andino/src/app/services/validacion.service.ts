import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface usuarioJSON {
  usuario:string;
  correo:string;
  rut:string;
  region:string;
  comuna:string;
  password:string;
}

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {
  private readonly jsonUrl = 'assets/usuarios.json';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<usuarioJSON> {
    return this.http.get<usuarioJSON>(this.jsonUrl);
  }
}
