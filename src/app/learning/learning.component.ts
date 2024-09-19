import { Component, SimpleChanges } from '@angular/core';
import { Employee } from '../customclasses/employee';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
 companyName1 = "Neosoft"
 companyName2 = "Web Works"
 companyName = this.companyName1
 baseLocation ="Dadar"
 checkStatus:any;
 inputType = "password"
 static companyDirector="Mr John";
 className=LearningComponent;
 slogan="";
 companyOffices=['Dadar, Mumbai','Parel','Rabale','Pune','Noida']
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
 constructor(){
  console.log("in learning constrcutor");
  setInterval(()=>{
    this.companyName = this.companyName1
    this.companyName1 = this.companyName2
    this.companyName2 = this.companyName
    
  },1000)
  setTimeout(()=>{
    LearningComponent.companyDirector="Mr Herry"
  }, 2000)
 }
 ngOnChanges(changes: SimpleChanges): void {
  console.log("in ngOnChanges of learning. this is lifecycle method gets called everytime when input bindings change");
  console.log(changes);
}
ngOnDestroy(): void {
  console.log("in ngOnDestroy of learning. this is last lifecycle method");
  console.log("release the resources b4 component gets destroyed...");
  
}
ngOnInit(): void {
  console.log("in ngOnInit of learning. this is first lifecycle method");
}

 display(){
  console.log(this.baseLocation);
  console.log(this.checkStatus);
  if(this.checkStatus)
    this.inputType="text"
  else
    this.inputType="password"
}
bindingImage={

  url:"https://www.tutorialsstar.com/wp-content/uploads/2021/05/1-Copy-768x406.png",

  height:300,

  width:400,

  name:"Data binding"

}
access(template:any){
 console.log(template);
 console.log(template.children);
 console.log(template.innerText);
 /*  let ele=document.createElement("p");
    ele.innerText="hi"
    template.append(ele) */
  
}
setCode(node:any){
  console.log(node.value);
}

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

}
