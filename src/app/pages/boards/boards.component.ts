import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {

  //lista para el acorrdeon
  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub item 1.1'
        },
        {
          label: 'Sub item 1.1'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub item 2.1'
        },
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub item 3.1'
        },
        {
          label: 'Sub item 3.1'
        },
        {
          label: 'Sub item 3.1'
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
