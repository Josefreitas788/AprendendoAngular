import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Curso } from '../models/curso.model';
@Component({
  selector: 'gc-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  constructor(private cursoService: CursoService) { }

  cursos: Curso[] = [];

  ngOnInit(): void {
    this.cursoService.listarCursos().subscribe((dados: Curso[]) => {
      this.cursos = dados;
      });
  }

}
