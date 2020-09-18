import { Component, OnInit } from '@angular/core';

interface dataElement { id: number, name: string};

@Component({
  selector: 'persohub-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.scss']
})
export class TrackbyComponent implements OnInit {

  listdata: dataElement[] = [
    {id: 1, name: 'Data 1'},
    {id: 2, name: 'Data 2'},
    {id: 3, name: 'Data 3'},
    {id: 4, name: 'Data 4'},
  ];

  constructor() { }

  ngOnInit() {
  }

  loadFromServer(){
    this.listdata = [
        {id: 3, name: 'Data 3'},
        {id: 4, name: 'Data 4'},
        {id: 5, name: 'Data 5'}
    ];
  }

  onRefresh(){
    this.loadFromServer();
  }

  trackedList(index: number, element: dataElement) {
    return element ? element.id : undefined
  }

  addElement(lastId){
    this.listdata.push({
      id: (lastId+1), 
      name: 'Added '+(lastId+1)
    });
  }

}
