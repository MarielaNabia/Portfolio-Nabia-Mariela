import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  private preguntasGastronomico: string[] = [];
  private preguntasHotelero: string[] = [];
  private preguntasEntretenimiento: string[] = [];

  constructor() {
    // Preguntas de ejemplo (pueden cargarse desde una fuente externa)
    this.preguntasGastronomico = [
      '¿Qué tipo de comida prefieres en tus viajes?',
      '¿Tienes restricciones alimentarias?',
      // ...
    ];
    
    this.preguntasHotelero = [
      '¿Qué tipo de alojamiento prefieres?',
      '¿Qué comodidades son importantes para ti?',
      // ...
    ];
    
    this.preguntasEntretenimiento = [
      '¿Qué actividades culturales te interesan?',
      '¿Qué tipo de entretenimiento nocturno disfrutas?',
      // ...
    ];
  }

  getPreguntasGastronomico(): string[] {
    return this.preguntasGastronomico;
  }

  getPreguntasHotelero(): string[] {
    return this.preguntasHotelero;
  }

  getPreguntasEntretenimiento(): string[] {
    return this.preguntasEntretenimiento;
  }
}



