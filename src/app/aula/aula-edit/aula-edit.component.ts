import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/curso/curso.service';
import { Curso } from 'src/app/curso/models/curso.model';
import { Aula } from '../aula/aula.model';
import { AulaService } from '../aula/aula.service';

@Component({
  selector: 'gc-aula-edit',
  templateUrl: './aula-edit.component.html',
  styleUrls: ['./aula-edit.component.css']
})
export class AulaEditComponent implements OnInit {

  public id?: number;
  aula?: Aula;
  aulaForm!: FormGroup;
  updated = false;
  cursos: Curso[] = [];
  constructor(
    private aulaService: AulaService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cursoService: CursoService
  ) {
    this.cursoService.listarCursos().subscribe((dados: Curso[]) => {
      this.cursos = dados;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.aulaService.buscarPorId(this.id!).subscribe(dado => {
      this.aula = dado;
    },
      error => console.log(error)
    );
    this.createForm();
  }
  createForm() {
    this.aulaForm = this.formBuilder.group({
      id: new FormControl(this.id),
      descricao: new FormControl(this.aula?.descricao, [Validators.required,
      Validators.minLength(5)]),
      tempoDuracao: new FormControl(this.aula?.tempoDuracao,
        [Validators.required]),
      curso: new FormControl(this.aula?.curso,
        [Validators.required]),
    });
  }
  update(){
    if (this.aulaForm.valid) {
      const curso = this.aulaForm.getRawValue() as Aula;
      this.aulaService.update(this.id, this.aula).subscribe(
        () => (this.updated = true),
        (error) => console.log(error)
      );
    }
  }

}
