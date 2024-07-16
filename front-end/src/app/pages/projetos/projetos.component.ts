import { Component } from '@angular/core';
import { CardV1Component } from '../../components/card-v1/card-v1.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [
    CardV1Component
  ],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {

}
