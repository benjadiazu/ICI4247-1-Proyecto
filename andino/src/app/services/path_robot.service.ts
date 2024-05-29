import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface PathRobotJson {
  mensajes: {
    [key:string]: {mensaje:string}
  };
}

@Injectable({
  providedIn: 'root',
})

export class PathService {
  private readonly jsonUrl = 'assets/jsonPath.json';
  info:any = {};

  constructor(private http: HttpClient) {}

  getPath(): Observable<PathRobotJson> {
    return this.http.get<PathRobotJson>(this.jsonUrl);
  }
}