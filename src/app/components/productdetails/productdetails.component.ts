import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productdetails: any[] = [];
  private productid :string = "4";
  constructor(private dataService: DataService) { 
    this.dataService.getProductDetails(this.productid).subscribe((response: any) => {
      this.productdetails = response.data;
      console.log(this.productdetails)
    })
  }

  ngOnInit(): void {
  }

}
