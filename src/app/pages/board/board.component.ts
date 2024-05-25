import { Component, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'; 
//dialog funciona como un servicio, enotnces necesitamos hacer la llamada en el constructor
import { Dialog } from '@angular/cdk/dialog';

import { Column, ToDo } from 'src/app/models/todo.model';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  columns : Column[]=[
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes',
        },
        {
          id: '2',
          title: 'Buy a unicorn',
        }, 
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in visual',
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play video games',
        }
      ]
    }
  ]


  todos: ToDo[]=[];

  doing: ToDo[] = [];

  done: ToDo[] = [];

  constructor(
    private dialog: Dialog
  ) { }

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

  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: [],
    })
  }

  openDialog(todo: ToDo){
    const dialogRef = this.dialog.open(TodoDialogComponent,{
      minWidth: '300px',
      maxWidth: '50%',
      //aca es donde podemos enviar la informacion
      data: {
        todo: todo,
      }
    });
  //para recibir informacion guardamos la instacia que nos devuelve el open, entonces nos suscribimos
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
}



}
