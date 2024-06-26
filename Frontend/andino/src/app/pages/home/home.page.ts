import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  userInfo:any;

  constructor(private userService:UserService, private alertController: AlertController) {}

  ngOnInit() {
    this.userService.getUserInfo().subscribe(
      data => {
        this.userInfo = data;
        console.log(this.userInfo)
      },
      error => {
        console.error('Error fetching user info', error);
      }
    );
  }

  async presentAlert() {
    console.log("boton")
    const alert = await this.alertController.create({
      header: 'Enter User ID',
      inputs: [
        {
          name: 'userId',
          type: 'text',
          placeholder: 'ID USUARIO',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmar Cancelación');
          },
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirmar Ok', data.userId);
            this.deleteAccount(data.userId);
          },
        },
      ],
    });
    await alert.present();
  }

  async accesoDenegado() {
    const alert = await this.alertController.create({
      header: 'Acceso denegado',
      message: 'No tienes permisos para realizar esta acción.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async accesoPermitido() {
    const alert = await this.alertController.create({
      header: 'Acceso Permitido',
      message: 'Cuenta borrada.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  deleteAccount(userId: string) {
    this.userService.deletePerson(userId).subscribe(
      (response) => {
        if (response['message'] == 'Acceso Denegado!'){
          this.accesoDenegado();
        }
        else{
          this.accesoPermitido();
          console.log('Cuenta borrada!:', response);
        }
      },
      (error) => {
        console.error('Error al borrar cuenta:', error);
      }
    );
  }
}
