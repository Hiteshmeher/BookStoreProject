import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/model/bookmodel';
import { BookserviceService } from 'src/app/service/bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books : BookModel[]=[];
  
  constructor(private service : BookserviceService) { }

  add:String="Add to Cart";

  ngOnInit(): void {
    this.service.getAllBook().subscribe((data:any)=>{
    this.books=data;
    console.log(data);
    });
  
  }
  
  onClickAdd(){
    this.add="Added"
    alert("Added to cart Successfully");

  }
}
