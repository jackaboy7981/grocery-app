import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  @Input("subcat") public subcategories :any[] = [];
  @Output() change = new EventEmitter();

  constructor() {
    //this.data = this.router.snapshot.params;
    
  }

  ngOnInit(): void {
  }

}
