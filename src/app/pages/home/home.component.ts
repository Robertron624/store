import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
})
export class HomeComponent implements OnInit {

  constructor() { }

  cols = 3

  ngOnInit(): void {
  }

  onColumnsCountChanged(colsNumb: number):void{
    this.cols = colsNumb
  }

}
