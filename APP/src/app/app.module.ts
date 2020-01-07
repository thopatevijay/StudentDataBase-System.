import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
// import { MatFormFieldModule } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule,MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule,MatMenuModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';


import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
// authGuard
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/child/header/header.component';
import { AddBatchComponent } from './dashboard/add-batch/add-batch.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentProfileComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    StudentListComponent,
    DefaultComponent,
    DashboardComponent,
    HeaderComponent,
    AddBatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSnackBarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatTabsModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard,UserService],
  bootstrap: [AppComponent],
  entryComponents:[StudentComponent]
})
export class AppModule { }
