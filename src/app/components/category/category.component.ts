import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[] = [];

  constructor(private dataService: DataService) { 
    this.dataService.getCategory().subscribe((response: any) => {
      this.categories = response.data;
      console.log(this.categories)
    })
  }

  ngOnInit(): void {
  }

}
