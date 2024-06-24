import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

import { RegionesService } from 'src/app/services/regiones.service';
import { passwordMatchValidator, rutValidator } from 'src/app/misc/form-validators';
import { FormError, mensajesErr } from 'src/app/misc/form-errors';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

interface Region{
  id:string;
  nombre:string;
  valor:number;
  comunas:string[];
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  alertbuttons=['Accept'];
  mensaje:String="";
  errorMessage: string = '';
  formulario:FormGroup;
  regiones: Region[] = [];
  comunas: string[] = [];

  constructor(private form:FormBuilder, private router:Router,private regionService:RegionesService,private authService:AutenticacionService) {
    this.formulario = this.form.group({
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      correo: ['',[Validators.required, Validators.email]],
      rut:['',[Validators.required,rutValidator]],
      region: ['',Validators.required],
      comuna: [{value: '', disabled: true}, Validators.required],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      confirm_password:['',[Validators.required,passwordMatchValidator]],
      tyc: [false,Validators.requiredTrue],
    });
  }

  // Cargar regiones
  ngOnInit() {
    this.regionService.getRegiones().subscribe(data => {
      this.regiones = Object.entries(data.regiones).map(([key, value]) => ({
        id: key,
        nombre: value.nombre,
        valor: value.valor,
        comunas: value.comunas,
        }));
    });
  }

  // Método que se ejecuta al cambiar la región
  onRegionChange() {
    const region = this.formulario.get('region')!.value;
    this.comunas = this.regiones.find(r => r.valor === region)!.comunas;
    if (this.comunas.length > 0) {
      this.formulario.get('comuna')!.enable();
    }
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    console.log(this.formulario.value);

    const username = this.formulario.get("usuario")?.value;
    const email = this.formulario.get("correo")?.value;
    const rut = this.formulario.get("rut")?.value;
    const region = this.formulario.get("region")?.value;
    const comuna = this.formulario.get("comuna")?.value;
    const password = this.formulario.get("password")?.value;
    const id_rol = "0";
    const id_robot = "2224";

    this.authService.RegistroUsuario(username,id_robot,id_rol,email,rut,region,comuna,password).subscribe(
      response => {
        //Respuesta API
        console.log("Respuesta enviada", response);
        this.mensaje = "Respuesta enviada";
        this.router.navigateByUrl('/login');
      },
      error => {
        //Error API
        console.error('Error en petición',error);
        this.errorMessage = "Algo ocurrió mal, intenta de nuevo";
      }
    );
  }

  // Obtener mensajes de error
  formError(campo: string): string | null {
    const control = this.formulario.get(campo);
    if (control && control.errors) {
      const error: FormError = Object.keys(control.errors)[0] as FormError;
      return mensajesErr[error];
    }
    return null;
  }
}
