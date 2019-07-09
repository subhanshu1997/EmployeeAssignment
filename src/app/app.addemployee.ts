import { Component } from "@angular/core";

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'

})
export class AddEmployeeComponent{
    // updateEmployee(){
    //     let index=0
    //     for(let data of this.arr){
    //         if(data.empId==this.id){
    //             index=this.arr.indexOf(data)
    //         }
    //     }
    //     this.arr[index].empId=this.empId1
    //     this.arr[index].empName=this.empName1
    //     this.arr[index].empSalary=this.empSalary1
    //     this.arr[index].empDepartment=this.empDepartment1
    // }
      // deleteEmployee(i:number):any{
    //     this.arr.splice(i,1)
    // }
    // updateEmployeeFiller(i:number){
    //     this.empId1=this.arr[i].empId
    //     this.empName1=this.arr[i].empName
    //     this.empSalary1=this.arr[i].empSalary
    //     this.empDepartment1=this.arr[i].empDepartment
    //     this.id=this.arr[i].empId
    // }
    empId:number
    empName:string
    empSalary:number
    empDepartment:string
    arr:any[]=[]
    status:boolean
    empty:boolean=true
    change(){
        this.arr[0]={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
        this.status=!this.status
        this.empty=false
    }
    
}