import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-reminderlist',
  templateUrl: './reminderlist.component.html',
  styleUrls: ['./reminderlist.component.css']
})
export class ReminderlistComponent implements OnInit {
  reminders:any

  constructor(public ds:DataService) { 
    this.reminders=this.ds.getReminder()
    
  }
  ngOnInit(): void {
  }
 

}
