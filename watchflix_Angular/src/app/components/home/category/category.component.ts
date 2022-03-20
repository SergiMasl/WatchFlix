import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() catList: any[] = [];


  @Output() choosed = new EventEmitter<string>();

  choose(category: string) {
    this.choosed.emit(category);
  }
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
