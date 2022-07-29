import { Component, OnInit } from '@angular/core';
import { Aula } from '../aula/aula.model';
import { AulaService } from '../aula/aula.service';

@Component({
  selector: 'gc-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {
  deleteMessage = false;
  constructor(private aulaService: AulaService) { }

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
  ngOnInit(): void {
    this.aulaService.listarAulas().subscribe(dados => {
      this.aulas = dados;
    });

  }

}
