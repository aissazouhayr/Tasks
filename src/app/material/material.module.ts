import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { , MatIconModule, } from '@angular/material';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';

import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule,MatSortModule,MatTabsModule,
   MatToolbarModule, MatCardModule
  ,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,} from  '@angular/material';
//import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatTabsModule,MatIconModule,MatSortModule ,MatButtonModule,MatToolbarModule,
    FlexModule,FlexLayoutModule,
    MatNativeDateModule,MatDatepickerModule
    ,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule
  ],
  exports:[
     BrowserModule,
    BrowserAnimationsModule,
    //MaterialModule,
    MatButtonModule,MatToolbarModule,
    MatTabsModule,MatIconModule,MatSortModule ,FlexModule,FlexLayoutModule,
    MatNativeDateModule,MatDatepickerModule,
    MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule
  
  ]
})
export class MaterialModule { }
