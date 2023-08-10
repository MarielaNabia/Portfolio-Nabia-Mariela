import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí iría la lógica para autenticar al usuario
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Simulación de autenticación exitosa
      this.router.navigate(['/dashboard']);
    } else {
      // Mostrar mensaje de error
    }
  }

  ngOnInit(): void {
  }

}

 

  


