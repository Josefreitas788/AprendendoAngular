import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aula } from '../aula/aula.model';
import { AulaService } from '../aula/aula.service';

@Component({
  selector: 'gc-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {
  deleteMessage = false;
  constructor(
    private aulaService: AulaService,
    private router: Router) { }

  aulas: Aula[] = [];
  delete(id?: number) {
    this.aulaService.delete(id!).subscribe(dado => {
      console.log(dado);
      this.deleteMessage = true;
      this.aulaService.listarAulas().subscribe(dados => {
        this.aulas = dados;
      });
    },
      error => console.log(error)
    );
  }
  updateAula(id?: number) {
    this.router.navigate(['edit-aula', id]);
  }
  detalheAula(id?: number){
    this.router.navigate(['detail-aula',id]);
    }
  ngOnInit(): void {
    this.aulaService.listarAulas().subscribe(dados => {
      this.aulas = dados;
    });

  }

}
