import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'; 
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  todos: ToDo[]=[
    {
      id: '1',
      title: 'Task 1',
    },
    {
      id: '2',
      title: 'Task 2',
    },
    {
      id: '3',
      title: 'Task 3',
    }
  ];

  doing: ToDo[] = [];
  done: ToDo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    //aca hacemos que se guarde en nuestro elemento array con la nueva posicion que va a tener
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

}
