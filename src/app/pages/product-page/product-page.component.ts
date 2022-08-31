import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products : any[] = []
  subcategories: any[] = [];
  catid :string = "0";
  scatid :string = "0"
  constructor(private dataService : DataService, private router :ActivatedRoute){
    
    this.catid = this.router.snapshot.params['catid'];
    console.log('id ='+this.catid) 
    this.dataService.getSubCategory(this.catid).subscribe((response: any) => {
      this.subcategories = response.data;
      console.log(this.subcategories)
      this.scatid = this.subcategories[0].subId;
      
      this.dataService.getProducts(this.scatid).subscribe((response: any) => {
        this.products = response.data;
        console.log(this.products)
        
      })
    }) 

   }

  ngOnInit(): void {
  }

}
