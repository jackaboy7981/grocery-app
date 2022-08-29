import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  subcategories: any[] = [];
  private catid :string = "4";
  constructor(private dataService: DataService, private router :ActivatedRoute) {
    //this.data = this.router.snapshot.params;
    this.catid = this.router.snapshot.params['catid'];
    console.log('id ='+this.catid) 
    this.dataService.getSubCategory(this.catid).subscribe((response: any) => {
      this.subcategories = response.data;
      console.log(this.subcategories)
    })
  }

  ngOnInit(): void {
  }

}
