import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mainheading = "NEOSOFT EMPLOYEE CRUD"
  constructor(){
    console.log("in header component");
    
  }
}
