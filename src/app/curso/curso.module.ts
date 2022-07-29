import { CursoCreateComponent } from './curso-create/curso-create.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursoListComponent } from './curso-list/curso-list.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    CursoCreateComponent,
    CursoListComponent
  ],
  exports: [
    CursoCreateComponent
  ]
})
export class CursoModule{

}
