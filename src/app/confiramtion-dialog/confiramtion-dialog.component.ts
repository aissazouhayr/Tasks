import { Component, OnInit,Inject, Input, Output, EventEmitter } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-confiramtion-dialog',
  templateUrl: './confiramtion-dialog.component.html',
  styleUrls: ['./confiramtion-dialog.component.css']
})
export class ConfiramtionDialogComponent implements OnInit {
   modalTitle: string;
 
  taskForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
       console.log("FROM Dialog      "+data);
   }

  ngOnInit() {
    this.taskForm = new FormGroup({
      Quote: new FormControl(null,[Validators.required]),
      QuoteType: new FormControl(null,[Validators.required]),
      Task1: new FormControl(null,[Validators.required]),
      DateDue: new FormControl(null,[Validators.required]),
      TaskType: new FormControl(null,[Validators.required]),
      Contact: new FormControl(null,[Validators.required])
    });
  }
   
}
