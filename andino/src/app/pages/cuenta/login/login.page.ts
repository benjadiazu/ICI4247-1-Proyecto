import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { FormError, mensajesErr } from 'src/app/misc/form-errors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulario:FormGroup;
  mensaje:String="";
  logueado=false;

  constructor(private form:FormBuilder, private router:Router) {
    this.formulario = this.form.group({
      correo:['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
    });
  }

  get btnColor() {
    return this.formulario.valid ? 'success' : 'danger';
  }

  get btnText() {
    return this.formulario.valid ? 'Formulario válido' : 'El formulario no es válido';
  }

  ngOnInit() {
  }

  formError(campo: string): string | null {
    const control = this.formulario.get(campo);
    if (control && control.errors) {
      const error: FormError = Object.keys(control.errors)[0] as FormError;
      return mensajesErr[error];
    }
    return null;
  }

  onSubmit() {
    console.log(this.formulario.value);
    // if(this.formulario.get("correo")?.value=='hola@gmail.com' && this.formulario.get("password")?.value=='123456'){
    //   this.mensaje="usuario exite";
    //   this.router.navigateByUrl('/home');
    // }
    // else{
    //   console.log("no valido");
    // }
  }

}
