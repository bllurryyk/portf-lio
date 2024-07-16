import { Routes } from '@angular/router';

/* pages */
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

export const routes: Routes = [
  { path: '', component: SobreComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'projetos', component: ProjetosComponent }
];
