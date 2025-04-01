import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MedicoPage implements OnInit {
  rol = 'Médico';  // Asignación del rol
  constructor() { }

  ngOnInit() {
  }

}
