import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placed',
  templateUrl: './placed.component.html',
  styleUrls: ['./placed.component.css']
})
export class PlacedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickCont(){
    this.router.navigate([""])
  }
}
