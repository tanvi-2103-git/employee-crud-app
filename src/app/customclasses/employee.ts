export class Employee {
    // _id:Number;
    // emp_name:String; 
    // emp_deptCode:String;
    // emp_salary:Number;
    // emp_email:String;
    // emp_experience:Number;
    // emp_joiningDate:Date;
    // secrete_code:String;
    // employee_pic:any ; 
    constructor(
  public      _id=0,
  public  emp_name="", 
  public  emp_deptCode="",
  public  emp_salary=0,
  public emp_email="",
  public  emp_experience=0,
  public  emp_joiningDate=Employee.getDateTimeLocal(new Date()),
  public  secrete_code="",
  public  employee_pic="" , 
       ){
        //    this._id=_id;
        //    this.emp_name=emp_name;
        //    this.emp_deptCode=emp_deptCode;
        //    this.emp_salary=emp_salary;
        //    this.emp_email=emp_email;
        //    this.emp_experience=emp_experience;
        //    this.emp_joiningDate=emp_joiningDate;
        //    this.secrete_code=secrete_code;
        //    this.employee_pic=employee_pic;
    }
    static getDateTimeLocal(d:Date){
        return  (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    }

}
