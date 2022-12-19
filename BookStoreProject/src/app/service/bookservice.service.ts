import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http : HttpClient) { }

  getAllBook(){
    return this.http.get("http://localhost:9090/book/findAll");
  }

  getBookById(id:number){
    return this.http.get("http://localhost:9090/book/get/"+id);
  }

  sortBookByPriceAsc(){
    return this.http.get("http://localhost:9090/book/asBookList");
  }

  sortBookByPriceDesc(){
    return this.http.get("http://localhost:9090/book/dsBookList");

  }

  userRegistration(user:any){
    return this.http.post("http://localhost:9090/user/register", user);
  }

  getAllUser(){
    return this.http.get("http://localhost:9090/user/findAll");
  }

  loginUser(user: any){
    return this.http.post("http://localhost:9090/user/login" , user)
  }
  
  addToCart(userId:number, bookId:number, quantity: any){
    console.log("book id "+bookId , "quantity " +quantity);
    let data = 
    {
      "bookId": bookId,
      "quantity": quantity
    }
    return this.http.post("http://localhost:9090/cart/addToCart/"+userId , data)
  }
  

  getCartByUserId(userId:number){
    console.log(userId)
    return this.http.get("http://localhost:9090/cart/CartByUser/"+userId);
  }

  placeOrder(userId:number){
    return this.http.get("http://localhost:9090/order/placeOrder/"+userId);
  }
}
