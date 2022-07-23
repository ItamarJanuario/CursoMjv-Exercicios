import { Component, OnInit } from '@angular/core';
import { Alunos } from '../../models/aluno.module';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.scss']
})
export class ListaAlunosComponent implements OnInit {

  aluno: Array<Alunos> = [
    {
      id: 1,
      nome: 'Itamar Lemos',
      valorMensalidade: 180,
      dataUltimoPgto: '22-07-03',
      dataInclusaoSistema: '22-07-22'
    },
    {
      id: 2,
      nome: 'Otavio Costa',
      valorMensalidade: 180,
      dataUltimoPgto: '21-12-01',
      dataInclusaoSistema: '19-07-03'
    },
    {
      id: 3,
      nome: 'Nathan Machado',
      valorMensalidade: 200,
      dataUltimoPgto: '22-01-28',
      dataInclusaoSistema: '18-01-01'
    },
    {
      id: 4,
      nome: 'Heitor Lima Neto',
      valorMensalidade: 180,
      dataUltimoPgto: '22-10-31',
      dataInclusaoSistema: '22-03-22'
    },
    {
      id: 5,
      nome: 'Giveon da Silva',
      valorMensalidade: 180,
      dataUltimoPgto: '22-08-04',
      dataInclusaoSistema: '21-07-21'
    },
    {
      id: 6,
      nome: 'Marcos Lionel',
      valorMensalidade: 70,
      dataUltimoPgto: '22-07-03',
      dataInclusaoSistema: '21-03-29'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
