import { Component } from '@angular/core';
import { CounterService } from '../customservices/counter.service';

@Component({
  selector: 'app-directives-learning',
  templateUrl: './directives-learning.component.html',
  styleUrl: './directives-learning.component.css',
  providers:[CounterService]
})
export class DirectivesLearningComponent {

  baseLocation ="Dadar"

  styleObject:any={
    backgroundColor:'lightblue', 
    color:'red', 
    textDecoration:'underline',
    width:'100px'
  }
  styleClasses=['bg-info', 'text-success', 'border', 'border-3','border-dark'];
  styleClassObject={
    'bg-info':true,
    'text-success':true, 
    'border':true, 
    'border-3':true,
    'border-dark':true
  }
   changeStyle(){
    this.styleObject.backgroundColor='green'
    // this.styleObject={...this.styleObject,transform: 'scale(2)'}
    this.styleObject.transform = 'scale(2)';
   }
   changeStyle2(){
    this.styleObject.backgroundColor='lightblue'
    this.styleObject.transform = 'scale(1)';
   }

   salaries=[7890.28334,738247.678,5478.78,837492.7,67326]
 offices=[
  {
    location:'Dadar, Mumbai (Headquarters)',
    address:'The Ruby Tower, Senapati Bapat Marg, Dadar West, Mumbai, Maharashtra 400028',
  },
  {
    location:'Parel, Mumbai',
    address:'Business Arcade, Sayani Road, Opp. S. T Bus Stand, Lower Parel, Mumbai, Maharashtra 400013',
  },
  {
    location:'Rabale, Mumbai',
    address:'Sigma IT Park, Unit No. 501, TTC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701',
  },
  {
    location:'Pune',
    address:'IT-09, 10th Floor, Blue Ridge SEZ, Hinjewadi, Pune, Maharashtra 411057',
  },
  {
    location:'Noida',
    address:'WorkEdge Coworx - Coworking Noida, B 23, Sector 63 Road, B Block, Sector 63, Noida, Uttar Pradesh 201301',

  }
 ]

 companyOffices=['Dadar, Mumbai','Parel','Rabale','Pune','Noida']
 counter1=0;
  constructor(private counterService:CounterService){
    console.log("....in directive Service....");
     this.counter1=this.counterService.scount;
    console.log(this.counter1);
    
  }

  increment(){
    this.counterService.incrementCounter();
    this.counter1=this.counterService.getCounter();
  }
  
}
