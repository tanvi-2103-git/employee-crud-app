import { Component } from '@angular/core';
import { CounterService } from '../customservices/counter.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipes-learning',
  templateUrl: './pipes-learning.component.html',
  styleUrl: './pipes-learning.component.css'
})
export class PipesLearningComponent {
  today=new Date();
  currencyCode='INR'
currencyCodes=[
  {
    country:'india',
    code:'INR'
  },
  {
    country:'japan',
    code:'JPY'
  },
  {
    country:'america',
    code:'USD'
  },
  {
    country:'europe',
    code:'EUR'
  }
]

salaries=[7890.28334,738247.678,5478.78,837492.7,67326]

counter3=0;

  constructor(private counterService : CounterService,private datePipe:DatePipe){

    console.log("....  in PipesLearningComponent .....");

    this.counter3=counterService.scount;

  }
  increment(){
    this.counterService.incrementCounter();
    this.counter3=this.counterService.getCounter();
  }
  formatDate(){

    console.log(this.today);

    let td=this.datePipe.transform(this.today, 'medium')

    console.log(td);

  }
  
}
