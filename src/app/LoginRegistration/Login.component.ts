import {Component, OnInit} from '@angular/core'
import { TaskService } from '../Task/task.component';
import { MatTableDataSource, MatSort,MatTableModule  } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
       selector:'Login',
       templateUrl:'Login.component.html'
        
})
export class LoginComponent implements OnInit{
      
      UserName:string;
//      password:string='';
      token;
     LoginForm: FormGroup;
     constructor(private taskService:TaskService,private router:Router){
             
     }
     ngOnInit(): void {
       this.LoginForm = new FormGroup({
              username: new FormControl(),
              password: new FormControl()
              
            });
}


     OnLoginSubmit(){
            this.taskService.LoginUser(this.LoginForm.value.username,this.LoginForm.value.password)
            .subscribe(res => {
            
              var obj = JSON.stringify(res).split(',');
              console.log("from login all object   "+obj);
               this.token = obj[0].split(':')[1].substring(1,obj[0].split(':')[1].length-1);

               this.UserName = obj[3].split('@')[0].split(':')[1].substring(1);
              console.log("from login   "+ this.token  +"    "+  this.UserName);
              localStorage.setItem('token',this.token);
              localStorage.setItem('UserName',this.UserName);
              this.router.navigateByUrl("taskList");
 
       
            },err => console.log(err));
     }

     
}