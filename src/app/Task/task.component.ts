import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Itask, TASKClass } from './Itask.component';

import { map, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Injectable(
  
)

export class TaskService implements OnInit{
    
    constructor(private _http:HttpClient){

    }

    ngOnInit(){
       
    }

     RegisterUser(RegisterForm:FormGroup):Observable<Response>{
     // console.log("from RegisterUser     "+RegisterForm.value);
     // "    "+RegisterForm.value.username+" " +
     // RegisterForm.value.password +" "+RegisterForm.value.ConfirmPassword);
     var param = new HttpParams();
     //param.set('username',JSON.stringify(RegisterForm.value.username)).set('password',JSON.stringify(RegisterForm.value.password)).set('ConfirmPassword',JSON.stringify(RegisterForm.value.ConfirmPassword));
     param =param.set('username','aissa5@hotmail.com').set('password','QWERt1984...').set('ConfirmPassword','QWERt1984...');
     var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
          return this._http.post<Response>('https://localhost:44334/api/Account/Register',RegisterForm.value,{ headers: reqHeader });
     }

    LoginUser( User:string,  Password:string):Observable<Response>
    {
       var data = "userName=" + User + "&Password=" + Password + "&grant_type=password";
      
       var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded'});
       var params = new HttpParams();
       params.set('userName',User).set('Password',Password).set('grant_type','password');
       params= params.set('username',User).set('password',Password).set('grant_type','password')
       ;

       
       return this._http.post<Response>('https://localhost:44334/token', params, { headers: reqHeader });
  
     } 


  
   
    getAllTasks(token:string):Observable<Itask[]>{
      
      var params = new HttpParams();
      var reqHeader = new HttpHeaders({
        'Content-Type': 'application/x-www-urlencoded',
         'Authorization': 'Bearer '+token});
      //  console.log("from getAlltasks      "+token);
      return  this._http.get<Itask[]>('https://localhost:44334//api/Task',
      {headers:reqHeader} );
    
   }
   DeleteTask(ID:number,token):Observable<Response>{
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token.toString()});
       console.log(ID +' from task serivice')
     return this._http.delete<Response>(`https://localhost:44334//api/Task/${ID}`,{headers:reqHeader});
  
 
   
   }
   createTask(task:TASKClass,token:string):Observable<TASKClass>{
     
    console.log(token +' from task service');
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json',
         'Authorization': 'Bearer '+token.toString()});
     
    return this._http.post<TASKClass>(`https://localhost:44334//api/Task`,task,//;

          //  { 
          //   headers:reqHeader
       
          //   }
            );
    }






    
      updateTask(task:Itask,token:string):Observable<Itask>{
        console.log(' from task service    ' +JSON.stringify(task)+"       "+task.DateDue +"  "+task.QuoteType);
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json',
         'Authorization': 'Bearer '+token.toString()});
      var params = new HttpParams();
      params =params.set('Quote',task.Quote).set('QuoteType',task.QuoteType).set('Contact',task.Contact)
      .set('Task1',task.Task1).set('DateDue',task.DateDue.toString()); 
       //params= params.set('username',User).set('password',Password).set(('grant_type','password');
     //  ;
      
        return this._http.put<Itask>(`https://localhost:44334//api/Task/${task.Quote}`,task
      
 
              // , { headers:reqHeader
            
              // }
              );
        }
   findTask(
      Quote:number, filter = '', sortOrder = 'asc',
      pageNumber = 1, pageSize = 3):  Observable<any> {
        params: new HttpParams()
        .set('Quote', Quote.toString())
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
      return this._http.get('https://localhost:44334//api/Task', 
      {
          params: new HttpParams()
              .set('Quote', Quote.toString())
              .set('filter', filter)
              .set('sortOrder', sortOrder)
              .set('pageNumber', pageNumber.toString())
              .set('pageSize', pageSize.toString())
      });
    //   .pipe(
    //       map(res =>  res["payload"])
    //   );
  }

}