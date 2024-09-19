import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrl: './decorator.component.css'
})
export class DecoratorComponent implements OnInit {
  ngOnInit(): void {
    console.log("in Deco.. ngOnInit..");
    /* do not emit the event from constructor instead use lifecycle method */
    this.emitter.emit(this.slogan);
    /* on every update at child side,
     we have to emit the event to give to updates to parent */
     
    // setTimeout(()=>{
    //   this.slogan="slogan changed....";
    // },2000)
    // console.log("again emit....");
    // setTimeout(()=>{
    //   this.emitter.emit(this.slogan);
    // },3000)
    
  }
 slogan="Jagte raho";
 @Output()
 emitter = new EventEmitter<string>();
//  when we pass data fro child to parent  child has to emit the event and has to emit the event and share a data via event

}
