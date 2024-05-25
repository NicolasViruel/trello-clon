import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { ToDo } from 'src/app/models/todo.model';

//data que voy a recibir
interface InputData {
  todo: ToDo;
}
//data que voy a redireccionar
interface OutputData {
  rta: boolean;
}


@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.todo = data.todo;
   }

  ngOnInit(): void {
  }

  //funcionalidad para el cierre del modal
  close(){
    this.dialogRef.close();
  }

  CloseWithRta(rta: boolean){
    this.dialogRef.close({ rta });
  }

}
