import { Component, OnInit , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-gestion-personal',
  templateUrl: './gestion-personal.component.html',
  styleUrls: ['./gestion-personal.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class GestionPersonalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
