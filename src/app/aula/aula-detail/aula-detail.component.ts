import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/curso/curso.service';
import { Curso } from 'src/app/curso/models/curso.model';
import { Aula } from '../aula/aula.model';
import { AulaService } from '../aula/aula.service';

@Component({
  selector: 'gc-aula-detail',
  templateUrl: './aula-detail.component.html',
  styleUrls: ['./aula-detail.component.css']
})
export class AulaDetailComponent implements OnInit {

  public id?: number;
  aula?: Aula;
  updated = false;
  cursos: Curso[] = [];
  constructor(
    private aulaService: AulaService,
    private route: ActivatedRoute,
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
  }
}


