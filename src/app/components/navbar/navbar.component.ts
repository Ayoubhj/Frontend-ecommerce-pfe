import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Dropdown = true
  dropmenu = true
  constructor() { }

  ngOnInit(): void {
  }
  
  toggle(){
    this.Dropdown = !this.Dropdown;
  }
  toggledrop () {
    this.dropmenu = !this.dropmenu;
  }
}
