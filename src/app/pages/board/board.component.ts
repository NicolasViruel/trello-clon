import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'; 
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
      title: 'Make dishes',
    },
    {
      id: '2',
      title: 'Buy a unicorn',
    },
  ];

  doing: ToDo[] = [
    {
      id: '3',
      title: 'Watch Angular Path in visual',
    }
  ];
  done: ToDo[] = [
    {
      id: '4',
      title: 'Play video games',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<ToDo[]>) {
    // ahora necesito saber a cual columna reordenar la tarea que estoy moviendo para eso se utiliza el "Transfer"
    if (event.previousContainer === event.container) {
      //aca hacemos que se guarde en nuestro elemento array con la nueva posicion que va a tener
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else{
      //ahora si estoy moviendo hacia otra columna debo utilizar el transfer
      transferArrayItem(
        event.previousContainer.data, //primero envio donde estaba la tarea
        event.container.data, //a donde va la nueva tarea
        event.previousIndex,
        event.currentIndex
      );
    }

  }

}
