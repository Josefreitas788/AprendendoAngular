import { Curso } from "src/app/curso/models/curso.model";

export interface Aula{
  id?: number;
  descricao: string;
  tempoDuracao: number;
  curso: Curso;
}