import { Modalidade } from './modalidade.model';
export interface Curso{
  id?: number;
  nome: string;
  cargaHoraria: number;
  modalidade: Modalidade;
}
