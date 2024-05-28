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
  errorMessage: string = '';

  constructor(private form:FormBuilder, private router:Router) {
    this.formulario = this.form.group({
      correo:['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
    });
  }

  ngOnInit() {
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

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    console.log('Formulario enviado:', this.formulario.value);
    if(this.formulario.get("correo")?.value=='generico@gmail.com' && this.formulario.get("password")?.value=='123456'){
      this.mensaje="usuario exite";
      this.router.navigateByUrl('/home');
    }
    else{
      console.log("no valido");
      this.errorMessage = "User invalid, try again.";
    }
  }

}
