import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './LoginRegistration/Login.component';
import { TaskService } from './Task/task.component';
import { HttpClient,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule, MatIconModule, MatSelectModule, MatCheckboxModule, MatGridListModule,
   MatDialogModule, MatCardModule,MatButtonModule, MatToolbarModule } from "@angular/material";
import { taskListComponent } from './Task/TaskList.component';
import { ConfiramtionDialogComponent } from './confiramtion-dialog/confiramtion-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskEditComponent } from './Task/taskEdit.component';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { MaterialModule } from './material/material.module';
import { RegisterComponent } from './LoginRegistration/Register.component';
import { ComponenetGuardsService } from './Gaurds/componenet-guards.service';
import { TokenInterceptor } from './Interceptors/HttpInterceptor/TokenInterceptor.component';
import { AuthService } from './Auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,LoginComponent, LayoutComponent,taskListComponent, ConfiramtionDialogComponent
    ,ConfiramtionDialogComponent,TaskEditComponent,RegisterComponent
  ],


  imports: [
    MaterialModule,
    BrowserModule
    ,FormsModule,HttpClientModule,  BrowserAnimationsModule,FlexLayoutModule,ReactiveFormsModule,
    BrowserAnimationsModule,MaterialModule,FlexLayoutModule ,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,MatIconModule,MatSelectModule,MatCheckboxModule
    ,MatGridListModule,MatDialogModule,MatCardModule,MatButtonModule, AppRoutingModule
    
 
  ],
 exports:[MatGridListModule,ConfiramtionDialogComponent,MatButtonModule,MatDialogModule
  ,BrowserAnimationsModule,FlexLayoutModule
],
  providers: [TaskService,NgxNavigationWithDataComponent,ComponenetGuardsService,FormsModule
  , {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }

],
  bootstrap: [AppComponent],
  entryComponents:[ConfiramtionDialogComponent]
})
export class AppModule { }
