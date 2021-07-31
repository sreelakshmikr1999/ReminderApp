import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReminderlistComponent } from './reminderlist/reminderlist.component';

const routes: Routes = [
  {
      path:"",component:FrontpageComponent
  },
  {
    path:"login",component:LoginComponent
},
{
  path:"register",component:RegisterComponent
},
{
  path:"dashboard",component:DashboardComponent
},
{
  path:"reminder",component:ReminderlistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
