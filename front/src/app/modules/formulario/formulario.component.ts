import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from 'src/app/core/services/question-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 
// Datos de la persona encuestada
nombreApellido: string = '';
email: string = '';
numeroCelular: string = '';

// Datos de la ciudad y preguntas relevantes
ciudad: string = '';
codigoPostal: string = '';
provincia: string = '';
paisOrigen: string = '';

preguntasGastronomico: string[] = [];
preguntasHotelero: string[] = [];
preguntasEntretenimiento: string[] = [];

enviarFormulario() {
  // lógica para enviar los datos del formulario
}
ngOnInit(): void {
}
}






