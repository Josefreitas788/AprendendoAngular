import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CursoService } from 'src/app/curso/curso.service';
import { Curso } from 'src/app/curso/models/curso.model';
import { Aula } from '../aula/aula.model';
import { AulaService } from '../aula/aula.service';

@Component({
  selector: 'gc-aula-create',
  templateUrl: './aula-create.component.html'
})
export class AulaCreateComponent implements OnInit {
  aulaForm!: FormGroup;
  submitted = false;
  cursos: Curso[] = [];
  constructor(
    private aulaService: AulaService,
    private formBuilder: FormBuilder,
    private cursoService: CursoService
  ) {
    // this.cursoService.listarCursos().subscribe((dados: Curso[]) => {
    //   this.cursos = dados;
    //   });
   }
  ngOnInit(): void {
    this.aulaForm = this.formBuilder.group({
      descricao: new FormControl('', [Validators.required,
      Validators.minLength(5)]),
      tempoDuracao: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
    });
    this.cursoService.listarCursos().subscribe((dados: Curso[]) => {
       this.cursos = dados;
       });
  }
  save() {
    if (this.aulaForm.valid) {
      const aula = this.aulaForm.getRawValue() as Aula;
      this.aulaService.save(aula).subscribe(
        () => (this.submitted = true),
        (error) => console.log(error)
      );
    }
  }
  addAulaForm() {
    this.submitted = false;
    this.aulaForm.reset();
  }
}
