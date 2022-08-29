import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  
  private scatid :string = "4";
  constructor(private dataService: DataService) { 
    this.dataService.getProducts(this.scatid).subscribe((response: any) => {
      this.products = response.data;
      console.log(this.products)
    })
  }

  ngOnInit(): void {
  }

}
