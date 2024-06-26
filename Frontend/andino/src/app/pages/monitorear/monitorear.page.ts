import { Component, OnInit } from '@angular/core';

interface Mensaje {
  id: string,
  mensaje: string,
}

@Component({
  selector: 'app-monitorear',
  templateUrl: './monitorear.page.html',
  styleUrls: ['./monitorear.page.scss'],
})

export class MonitorearPage implements OnInit {
  objetosMensajes: Mensaje[] = [];
  items: string[] = [
    "Route Finished.\nRobot is back into the Start.",
    "Black Square detected.\nTurned left and advance 1m",
    "Turned right and advance 3m.",
    "PERSON DETECTED\nState: Critical\nPRESS TO GET ROUTE",
    "Turned right and advanced 2 m.",
    "Robot started the trip by going 4 m straight."
  ];

  constructor(){}

  ngOnInit() {

  }
    
}