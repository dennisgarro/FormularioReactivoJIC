import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  submit() {
    debugger;
    if (this.loginform.valid) {
      let email = this.loginform.get('email')?.value;
      let contra = this.loginform.get('password')?.value;
      // agragar variable al sessionStorage
      sessionStorage.setItem('correo', email);

      // crear objeto 
      let obj = { correo: email, pass: contra, ejemplo: 'dennis' }
      // agregar objeto al sessionStorage
      sessionStorage.setItem('objeto', JSON.stringify(obj));

      // acceder a los valores del objeto en el sessionStorage
      let objdeserializado = sessionStorage.getItem('objeto');
      if (objdeserializado) {
        let objseruializado = JSON.parse(objdeserializado)
        console.log(objseruializado);

      }


      console.log("formularo correcto");
    } else {
      console.log("formulario invalido");
      console.log("errores en el email: ", this.loginform.get('email')?.errors);
      console.log("errores en el password", this.loginform.get('password')?.errors);
    }
  }
}

