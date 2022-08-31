import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  @Input("subcat") public subcategories :any[] = [];
  constructor() {
    //this.data = this.router.snapshot.params;
    
  }

  ngOnInit(): void {
  }

}
