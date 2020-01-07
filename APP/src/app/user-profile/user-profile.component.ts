import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService,private router : Router,private NotificationService:NotificationService) { }
  

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res['user'];
      },
      err => { }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    // this.NotificationService.success('LogOut');
    this.NotificationService.success('Logged out.');


    this.router.navigate(['/login']);
  }
}
