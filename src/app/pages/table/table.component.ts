import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product.model';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  dataSource = new DataSourceProduct();
  //necesitamos instanciar las columnas a renderizar
  columns: string[] = ['#No', 'name', 'price', 'cover', 'actions'];
  //variable para hacer el calculo del footer y muestre todo el contenido
  total = 0;
  //formulario reactivo
  input = new FormControl('', { nonNullable: true} );

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe( data =>{
      // this.dataSource.init(data) = data;
      this.dataSource.init(data); 
      this.total = this.dataSource.getTotal();
    })

    this.input.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value=>{
      this.dataSource.find(value);
    })

  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20});
  }

}
