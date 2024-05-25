import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  //para cambiar los colores dinamicos, y no se puede concatenar ya que tailwind no puede leer en tiempo de ejecusion
  get colors(){
     return {
      'text-white': this.color === 'success' || this.color === 'primary' || this.color === 'red',
      //cambio de colores en caso de escoger el adecuado
      'text-gray-700': this.color === 'gray-light',
      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-500': this.color === 'gray',
      'focus:ring-gray-50': this.color === 'gray',
     };
  }

}
