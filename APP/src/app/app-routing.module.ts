import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddBatchComponent } from './dashboard/add-batch/add-batch.component';





const routes: Routes = [
  {path:'dashboard',component:DefaultComponent,
  children:[{
    path:'',component:DashboardComponent},
    {path: 'studentlist', component:StudentListComponent,canActivate:[AuthGuard]},
    { path :'viewdetail/:id' , component:StudentProfileComponent,canActivate:[AuthGuard]},
    { path :'addstudent',component:StudentComponent,canActivate:[AuthGuard]},
    { path :'addbatch',component:AddBatchComponent,canActivate:[AuthGuard]},


    ],canActivate:[AuthGuard]},

  
  { path :'signUp', component:UserComponent,
    children:[{path:'',component:SignUpComponent}]
  },
  { path :'login', component:UserComponent,
    children:[{path:'',component:SignInComponent}]
  },
  {
    path: 'userprofile', component:UserProfileComponent,canActivate:[AuthGuard]
  },  
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
