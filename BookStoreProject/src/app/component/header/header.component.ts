import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

cartAll=localStorage.getItem('CartLength');

  constructor(private router :Router ){ }

  ngOnInit(): void {
  }

  onBookStoreClick(){
    this.router.navigate([""]);
  }
  onCartClick(){
    this.router.navigate(["cart"]);
  }
  onClickLogout(){
    this.router.navigate([""]);
    alert("Successfully Logged out");

  }
}
