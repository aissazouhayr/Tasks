
import { Component, OnInit,inject, Input } from '@angular/core';
// Import FormGroup and FormControl classes
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from './task.component';
import { Router } from '@angular/router';
import { Itask } from './Itask.component';
//import 'rxjs/operator'
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
@Component({
  selector: 'taskEdit',
  templateUrl: './taskEdit.component.html',
  styleUrls:  ['./taskEdit.component.css'],
  providers:[TaskService]
  //styleUrls: ['./taskCreate.component.css']
})


export class TaskEditComponent implements OnInit {
 
  // This FormGroup contains fullName and Email form controls
  taskForm: FormGroup;
  statusMessage:string;
  task:Itask;
  token;
  @Input() taskToEdit: Itask;
  
  constructor(private taskService:TaskService, private router:Router,
    public navCtrl: NgxNavigationWithDataComponent) {
      //  console.log(this.navCtrl.get('task') + " from taskEdit comp"); // it will console Virendra
      //   console.log(this.navCtrl.data + " from taskEdit comp"); // it will console whole data object here
     }

  // Initialise the FormGroup with the 2 FormControls we need.
  // ngOnInit ensures the FormGroup and it's form controls are
  // created when the component is initialised
  ngOnInit() {
      this.task=<Itask>this.navCtrl.data;
    console.log(this.task.DateDue+ " from taskEdit comp ngOnInit"); // it will console Virendra
    //console.log(this.navCtrl.data + " from taskEdit comp ngOnInit"); // it will console whole data object here
     this.taskForm = new FormGroup({
       Quote: new FormControl(null,Validators.required),
       QuoteType: new FormControl(null,Validators.required),
      Task1: new FormControl(null,Validators.required),
      DateDue: new FormControl(null,Validators.required),
       TaskType: new FormControl(null,Validators.required),
       Contact: new FormControl(null,Validators.required)
     });

  }

  OnTaskEditSubmit():void{
      this.token= localStorage.getItem('token');
      console.log("from taskEdit com method OnTaskEditSubmit"+JSON.stringify(this.taskForm.value));
      if(!this.taskForm.invalid)
      {
       console.log("indide onTask Edit");
      this.taskService.updateTask(this.taskForm.value,this.token).
      subscribe(res=>
         {
           this.statusMessage="Task was added successfully"
          
      ,    this.router.navigateByUrl("/taskList");
    },
      err => this.statusMessage= err);
      
     }

  }
  onBackToTaskListClick(){
    
    this.router.navigateByUrl("/taskList");
  }

 
}