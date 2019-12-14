import { Component, OnInit, ViewChild,ChangeDetectorRef, OnChanges } from '@angular/core';
import { TaskService } from './Task/task.component';
import { Itask } from './Task/Itask.component';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { catchError, finalize, tap } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './Auth/auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

   isLoggedIn:boolean= false;

  user:string="?";
  constructor(public http: HttpClient,public auth: AuthService){}

  // public ping() {
  //   this.http.get('https://localhost:44334//api/Task')
  //     .subscribe(
  //       data => console.log("success from ping() ping() ping() ========="+data),
  //       err => console.log("Eroor from ping() ping() ping() ========="+err)
  //     );
  // }
  ngOnInit(): void {
    this.isLoggedIn = this.auth.isAuthenticated();
    this.user = localStorage.getItem("UserName");
  }

  OnLogOutClick(){
    console.log("dddddddddddddddddddddddddddddddddddddddddd");
    localStorage.removeItem("UserName");
    localStorage.removeItem("token");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.isLoggedIn = this.auth.isAuthenticated();
  }
LoggedIn():boolean{
  this.user = localStorage.getItem("UserName");
  return this.auth.isAuthenticated();
}





}
