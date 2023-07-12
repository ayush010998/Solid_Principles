//Single responsibility Principles

//A class should have one and only one reason to change,means that a class should have only one job.

//"Each module should be responsible to one and only one users or stakeholders"

//let us assume that we have an employee object ,it has three functions calculatePay(),reportHours(),save()

function Employee(name,pos,hours){
    this.name=name;
    this.pos=pos;
    this.hours=hours;


    this.calculatePay=function(){
        //
    }
    this.reportHours=function(){
        //
    }
    this.save=function(){
       //
    }
}

//this is violating srp because these functions are responsible for three diffrent actors
/**The calculatePay() function is responsible for the accounting department.
The reportHours() function is used by the human resources department.
The save() function is specified by the database administrators. */

function EmployeeData(name,pos,hours){
    this.name=name;
    this.pos=pos;
    this.hours=hours;

}

function payCalculator(EmployeeData){
    this.EmployeeData=EmployeeData
    this.calculatePay=function(){
        // codes
    }
}

function HourReporter(employdata){
    this.employdata=employdata
    this.reportHours=function(){
        //codes
    }
}

function EmployServer(employdata){
    this.employdata=employdata
    this.save=function(){
        //codes
    }
}


