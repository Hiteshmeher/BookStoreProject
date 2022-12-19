import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel, CartModel } from 'src/app/model/bookmodel';
import { BookserviceService } from 'src/app/service/bookservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartValue : any;
  userId: any = localStorage.getItem('LoggedUserId')
  cartLength:any;
  allCart: any;

  constructor(private router :Router,
    private service: BookserviceService) { }

    
    ngOnInit(): void {
    this.service.getCartByUserId(this.userId).subscribe((data:any)=>{
      this.allCart=data.object;
      console.log(data.object)
      this.cartLength=data.object.length;
    });
  }

  
  onCheckout(){
    console.log("booook " +this.allCart.data) 

    // this.router.navigate(["placed"]);
  }

  onClickPlus(){
    console.log()
    // this.allCart.quantity+=1;
  }

  onClickMinus(){
    if(this.cartValue>1){
    this.cartValue-=1;
    }
  }

}
