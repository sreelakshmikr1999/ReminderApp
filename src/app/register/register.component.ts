import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    uname: ["", [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ["", [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd: ["", [Validators.required, Validators.minLength(8), Validators.pattern('[0-9a-zA-Z]*')]]
  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    if (this.registerForm.valid) {
    var acno = this.registerForm.value.acno
    var uname = this.registerForm.value.uname
    var pswd = this.registerForm.value.pswd
    var result = this.ds.register(acno, uname, pswd)
    if (result) {
      alert("Registration Succesfull")
      this.router.navigateByUrl("/login")
    }
    else {
      alert("user exists!!!!! please use another account number")
    }
  }else{
  alert("invalid form");
  }

}
}

