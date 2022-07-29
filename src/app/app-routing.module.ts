import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AulaCreateComponent } from './aula/aula-create/aula-create.component';
import { AulaListComponent } from './aula/aula-list/aula-list.component';
import { HomeComponent } from './componentes/home/home.component';
import { CursoCreateComponent } from './curso/curso-create/curso-create.component';
import { CursoListComponent } from './curso/curso-list/curso-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'novo-curso',
    component: CursoCreateComponent
  },
  {
    path: 'lista-curso',
    component: CursoListComponent
  },
  {
    path: 'nova-aula',
    component: AulaCreateComponent
  },
  {
    path: 'lista-aula',
    component: AulaListComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
