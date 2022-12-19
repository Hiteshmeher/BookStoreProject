import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/model/bookmodel';
import { BookserviceService } from 'src/app/service/bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id:any = this.route.snapshot.paramMap.get("id");

  booklist:BookModel[] = [];
  sortby = 'relevance';
  search : any ;
  cartValue : any;


  constructor(
    private service : BookserviceService,
    private route:ActivatedRoute
    ) { }

  add:String="Add to Cart";

  ngOnInit(): void {
    this.sortBooks(this.sortby);
  }
  sortBooks(deviceValue:any){
    this.sortby = deviceValue
    if ( this.sortby == 'relevance'){
      this.service.getAllBook().subscribe((data:any)=>{
        this.booklist=data.object;
        console.log(this.booklist);
        });
      }
      if (this.sortby == 'asc') {
        this.service.sortBookByPriceAsc().subscribe((data: any) => {
          this.booklist = data.object;
          console.log(this.booklist)
        });
      }
      if (this.sortby == 'desc') {
        this.service.sortBookByPriceDesc().subscribe((data: any) => {
          this.booklist = data.object;
          console.log(this.booklist)
        });
      }
    }

  getBookById(id:number){
    this.service.getBookById(id).subscribe((data:any)=>{
      console.log(data.id)
    });
  }


  userId: any = localStorage.getItem('LoggedUserId')
  // bookId : any;

  onClickAdd(userId:number, bookId:number){
    console.log("book id "+bookId);
    alert("Book added to cart");
    this.service.addToCart(userId,bookId,this.cartValue).subscribe((data:any)=>{
      console.log(data.object);
    });
  }


  
}
