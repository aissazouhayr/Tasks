import {Component, OnInit, OnChanges} from '@angular/core'
import { TaskService } from '../Task/task.component';
import { MatTableDataSource, MatSort,MatTableModule  } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
       selector:'Register',
       templateUrl:'Register.component.html'
        
})
export class RegisterComponent implements OnInit,OnChanges{
      ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
            throw new Error("Method not implemented.");
      }
      
      UserName:string;
//      password:string='';
      token;
     RegisterForm: FormGroup;
     constructor(private taskService:TaskService,private router:Router){
             
     }
     ngOnInit(): void {
       this.RegisterForm = new FormGroup({
              Email: new FormControl(),
              password: new FormControl(),
              ConfirmPassword: new FormControl()
              
            });
    }



     OnRegisterSubmit(){
         //   console.log(JSON.stringify(this.RegisterForm.value)+"           "+this.RegisterForm.value.username+" " 
           // +this.RegisterForm.value.password +" "+this.RegisterForm.value.ConfirmPassword);
           console.log("from  OnRegisterSubmit()     "+JSON.stringify(this.RegisterForm.value));
            this.taskService.RegisterUser(this.RegisterForm).subscribe( res =>
                  //  console.log(res)
              this.router.navigateByUrl("Login"),
              err =>  console.log(err.Message));
           
     }

     
}