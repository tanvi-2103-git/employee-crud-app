import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMPLOYEE MANAEMENT';
  toggle=true;
  constructor(/* xyz="abc" only service objects are allowed*/){
    console.log("in App component");
    /* if parent is updating shared data then child also get affected, auto synch */
    //  setTimeout(()=>{
    //   this.title="MAIN HEADING CHANGED"
    // },2000); 
  }
}
