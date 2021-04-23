import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/product/products.service";
import {UserServicesService} from "../../services/user/user-services.service";
import {Router} from "@angular/router";
import {Product} from "../../Interface/product";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image = "../assets/home.jpg";
  image2 = "../assets/secondhome.jpg";
  clothes = "../assets/clothes.jpg";
  shoes = "../assets/shoes.jpg";
  watch = "../assets/watch.jpg";
  products : Product[] = [];
  path : any = "http://localhost:8000/images/"
  constructor(public authuser : UserServicesService,public prodLoad : ProductsService,private route: Router) { }

  ngOnInit(): void {
    this.authuser.UserData();

    this.prodLoad.getlastshoes().subscribe( res => {
          this.products = [...res.data]
      console.log(this.products)
    });
  }


  ViewProductDetails(product :any){
     this.prodLoad.ViewProductDetails(product);
  }



}
