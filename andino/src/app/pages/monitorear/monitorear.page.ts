import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { PathService } from '../../services/path_robot.service';

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

  constructor(private pathRobotService: PathService){}

  ngOnInit() {
    /*
    this.pathRobotService.getPath().subscribe(
      data => {
        this.objetosMensajes = Object.entries(data.mensajes).map(([key,value]) =>
          ({
            id:key,
            mensaje:value.mensaje,
          })
        
        );

      }
    );
    console.log(this.objetosMensajes.length);
    
    for(let i = 0; i < this.objetosMensajes.length; i++){
      console.log(this.objetosMensajes[i].mensaje);

    }
    */
  }
    
}
