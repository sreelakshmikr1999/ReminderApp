import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser = ""
  currentAc = ""
  user1: any = {
  }

  constructor(private router: Router) {
    this.getDetails()
  }

  saveDetails() {
    localStorage.setItem("user1", JSON.stringify(this.user1))
    if (this.currentUser) {
      localStorage.setItem("currentuser1", JSON.stringify(this.currentUser))
    }
    if (this.currentAc) {
      localStorage.setItem("currentac1", JSON.stringify(this.currentAc))
    }

  }

  getDetails() {
    if (localStorage.getItem("user1")) {
      this.user1 = JSON.parse(localStorage.getItem("user1") || '')
    }
    if (localStorage.getItem("currentuser1")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentuser1") || '')
    }
    if (localStorage.getItem("currentac1")) {
      this.currentAc = JSON.parse(localStorage.getItem("currentac1") || '')
    }
  }


  getReminder() {
    return this.user1[this.currentAc].reminder
  }


  register(acno: any, uname: any, password: any) {
    let accDetails = this.user1
    if (acno in accDetails) {
      return false;
    } else {
      accDetails[acno] = {
        acno,
        uname,
        password,
        reminder: []
      }
      this.saveDetails()
      return true
    }
  }




  login(acno: any, password: any) {
    let accDetails = this.user1
    if (acno in accDetails) {
      if (password == accDetails[acno]["password"]) {
        this.currentUser = accDetails[acno]["uname"]
        this.currentAc = acno;
        this.router.navigateByUrl("dashboard")
        this.saveDetails()
        return true


      } else {
        alert("incorrect password")
        return false
      }
    } else {
      alert("invalid user")
      return false
    }
  }
  setReminder(date: any, reminder: any) {
    let accDetails = this.user1
    if (this.currentAc in accDetails) {
      accDetails[this.currentAc].reminder.push({
        date: date,
        reminder: reminder
      })
      this.saveDetails()
      return true
    } else {
      return false
    }


  }
}