    import { Component, OnInit, ViewChild, Input } from '@angular/core';
    // import { TaskService } from './Task/task.component';
    // import { Itask } from './Task/Itask.component';
    import { BehaviorSubject, Observable, of } from 'rxjs';
    //import { CollectionViewer, DataSource } from '@angular/cdk/collections';
    import { catchError, finalize, tap } from 'rxjs/operators';
    //import { TaskDataSource } from './Task/TaskDataSource';
    import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
    import { templateJitUrl } from '@angular/compiler';
    import { Itask, TASKClass } from './Itask.component';
    import { TaskService } from './task.component';
    import { FormControl, FormGroup } from '@angular/forms';
    import { MatDialog, MatDialogConfig } from '@angular/material';
    import { ConfiramtionDialogComponent } from '../confiramtion-dialog/confiramtion-dialog.component';
    import {Router} from '@angular/router';
    import {TaskEditComponent} from './taskEdit.component';
    import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
    @Component({
        selector:'TaskList',
        templateUrl:'./taskList.component.html',
        styleUrls:  ['./taskList.component.css']

    })

    export class taskListComponent implements OnInit{
        breakpoint:number=4;
        Rowspan:number =1;
        task:Itask;
        @ViewChild(ConfiramtionDialogComponent,null) ConfiramtionDialogComponent:ConfiramtionDialogComponent;
        @ViewChild(TaskEditComponent,null) child;
            tiles:any[] = [
            {text: 'One', cols: 4, rows: 1, color: 'lightblue',height:'1px'},
        //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
            {text: 'Three', cols: 4, rows: 2, color: 'lightpink',height:'1'},
            {text: 'Four', cols: 4, rows: 10, color: '#DDBDF1',height:'10x'},
        ];
        token;
        checked:boolean= true;
        selectedColumn;
        selectedNumber:number =10;
        searchKey:string;
        TASKsData:Itask[];
        TaskList:MatTableDataSource<Itask>;
    DSCount:number;
    
    // displayedColumns= ["seqNo", "description", "duration"];
        displayedColumns = ["Quote", "QuoteType","Contact","Task","DueDate","Actions"];
        data:string;
        @ViewChild(MatPaginator,{static: false})  paginator: MatPaginator;
        @ViewChild(MatSort,null) sort: MatSort;
    constructor(public  taskService:TaskService,public dialog: MatDialog,
        private router: Router,public navCtrl: NgxNavigationWithDataComponent){

    }
    ngOnInit() {
        var token = localStorage.getItem("token");
        var UserName = localStorage.getItem("UserName");
 
        this.taskService.getAllTasks(token).subscribe(result=> {
      
        console.log(result  +"from result##############################");
      
        this.TaskList = new MatTableDataSource(result);
        this.TaskList.sort =    this.sort;  
        this.TaskList.paginator = this.paginator;
      
        });
    }
    valueSelected() {
      
        if(this.checked){
            this.TaskList.sort.direction =  'desc' ;  
        }
        else{
            this.TaskList.sort.direction =  'asc' ;  
        }
    
        this.TaskList.sort.active =  this.selectedColumn;  
        this.TaskList.sort = this.sort;

    }
    ShowvalueSelected(){
    this.TaskList.paginator.pageSize = this.selectedNumber;
    this.TaskList.paginator = this.paginator;
    //console.log(this.selectedNumber);
    }
    onSearchClear(){
        this.searchKey ='';
        this.applyFilter();
    }
    applyFilter(){
        this.TaskList.filter = this.searchKey.trim().toLowerCase();
    }

    DeleteTask(quote){
        console.log("inside  DeleteTask")
        this.token = localStorage.getItem("token");
        if(confirm("Are you sure to delete quote" +quote)) {
            console.log("Implement delete functionality here");
            this.taskService.DeleteTask(quote,this.token).subscribe(res =>{
                this.TaskList.data.pop();
                this.TaskList.sort = this.sort
                ,this.TaskList.paginator = this.paginator });
        }  

        
       
     

       
       
    }

    OnCreateTaskBtnClick(){
        console.log("clockedddddddddddd");
        this.router.navigateByUrl('/createTask');
        this.TaskList.sort = this.sort;
         this.TaskList.paginator = this.paginator;

    }

    onEditIconTaskClick(row){
       this.navCtrl.navigate('EditTask', row);
    }
  
   
    openModal()
     {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
        id: 1,
        title: "test"
        };
        const dialogRef = this.dialog.open(ConfiramtionDialogComponent, dialogConfig);
       
        dialogRef.afterClosed().subscribe(result =>
        {
                //console.log("Dialog was closed" );
               // console.log(result);
                if(result.valid)
                {
                  //  console.log("Dialog was closed inside IF" );
                    let t = new TASKClass();
                    t.Quote=     result.controls.Quote.value;
                    t.QuoteType= result.controls.QuoteType.value;
                    t.Task1= result.controls.Task1.value;
                    t.TaskType= result.controls.TaskType.value;
                    t.Contact= result.controls.Contact.value;
                    t.DateDue= result.controls.DateDue.value;

                    this.token = localStorage.getItem("token");
                    this.taskService.createTask(t,this.token).
                    subscribe(res=> 
                    {
                    
                            this.TaskList.data.push(res),
                            this.TaskList.paginator.nextPage= this.TaskList.paginator.lastPage,
                            this.TaskList.paginator = this.paginator,
                            this.TaskList.sort = this.sort
                
                    },
                        err => console.log(" from openModal "+err)
                    )
                }   
                else {
                    console.log("Dialog was closed inside ELSE" );
                    dialogRef.disableClose= true;
                } 
         });
       
        }
     
        onResize(event) {
            console.log(event.target.innerWidth +"ssssssssssssssssssssssssssssss");

            this.breakpoint = (event.target.innerWidth <= 763) ? 4: 4;
            this.Rowspan =  (event.target.innerWidth <= 763) ? 4: 1;
            
          }
         
    }