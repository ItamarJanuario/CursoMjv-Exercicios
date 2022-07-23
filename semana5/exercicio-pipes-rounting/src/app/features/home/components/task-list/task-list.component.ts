import { Component, OnInit } from '@angular/core';
import { TasksList } from '../../models/TasksList.module';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Array<TasksList> = [
    {
      id: 1,
      description: 'Criar um projeto básico',
      completed: true,
      inclusionDate: '2021-07-21'
    },
    {
      id: 2,
      description: 'Colocar o lixo para fora até as 19h',
      completed: true,
      inclusionDate: '2021-07-22'
    },
    {
      id: 3,
      description: 'Fazer o jantar até as 22h',
      completed: true,
      inclusionDate: '2021-07-20'
    },
    {
      id: 4,
      description: 'Reunião de alinhamento dia 18/07 as 14h',
      completed: true,
      inclusionDate: '2021-07-21'
    },
    {
      id: 5,
      description: 'Reunião de alinhamento projeto bradesco 18/07 as 16h',
      completed: false,
      inclusionDate: '2021-07-19'
    },
    {
      id: 6,
      description: 'Criar conteúdo da aula',
      completed: false,
      inclusionDate: '2021-07-18'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
