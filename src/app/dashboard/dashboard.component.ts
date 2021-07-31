import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    date="";
    reminder="";
  constructor(private ds:DataService) { }
  currentUser=this.ds.currentUser
  ngOnInit(): void {
  }
  setReminder(){
    var date=this.date;
    var reminder=this.reminder;
    var result= this.ds.setReminder(date,reminder)
    if(result){
      alert("reminder set for " +date )
    }
  else{
    alert("reminder not set")
  }
 }

}
