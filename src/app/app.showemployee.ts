import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector:'show-employee',
    templateUrl:'app.showemployee.html'
})
export class ShowEmployee implements OnChanges{

    arr:any[]=[
        {empId:1001,empName:"ABCD",empSalary:5000,empDepartment:"Java"},
        {empId:1004,empName:"Subhanshu",empSalary:50000,empDepartment:"Java"},
        {empId:1005,empName:"ABCD",empSalary:100000,empDepartment:"Java"}
    ]
    // @Input()
    // empId:number
    // @Input()
    // empName:string
    // @Input()
    // empSalary:number
    // @Input()
    // empDepartment:string
    @Input()
    emparr:any[]=[]
    // ngOnInit(): void {
    //    this.addEmployee()
    // }
    addEmployee():any{
        // alert("employee added"+this.empId+" "+this.empName+" "+this.empSalary+" ")
        // this.arr.push(this.empId+this.empName+this.empSalary
        
    }
    @Input()
    status:boolean
    @Input()
    empty:boolean
    ngOnChanges(changes: SimpleChanges):any {
        if(changes['status']){
        if(this.empty==false){
            this.arr.push(this.emparr[0])
        }
  }
}}

    
      // this.arr.push(this.emparr[1])
       // console.log(this.arr)
    //    console.log(this.emparr)