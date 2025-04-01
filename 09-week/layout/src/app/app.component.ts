import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class GestionPersonalComponent {
  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  correo: string = '';
  rol: string = ''; // 'Médico', 'Enfermero', 'Recepcionista', 'Paciente'
  
  // Campos adicionales según el rol
  especialidad: string = '';
  numeroLicencia: string = '';
  turno: string = '';
  areaAtencion: string = '';
  horarioLaboral: string = '';
  extensionTelefonica: string = '';
  historiaClinica: string = '';
  tipoAfiliacion: string = '';

  agregar() {
    console.log('Agregar', this);
    // Lógica para agregar personal
  }

  modificar() {
    console.log('Modificar', this);
    // Lógica para modificar personal
  }

  eliminar() {
    console.log('Eliminar', this);
    // Lógica para eliminar personal
  }

  consultar() {
    console.log('Consultar', this);
    // Lógica para consultar personal
  }
}
