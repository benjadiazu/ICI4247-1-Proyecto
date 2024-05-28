import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

import { RegionesService } from 'src/app/services/regiones.service';
import { passwordMatchValidator, rutValidator } from 'src/app/misc/form-validators';
import { FormError, mensajesErr } from 'src/app/misc/form-errors';

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
  formulario:FormGroup;
  regiones: Region[] = [];
  comunas: string[] = [];

  constructor(private form:FormBuilder, private regionService:RegionesService) {
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
