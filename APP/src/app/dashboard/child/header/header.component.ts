import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserProfileComponent } from '../../../user-profile/user-profile.component'
import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../../shared/notification.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();


  constructor(private userService: UserService,private router : Router,private NotificationService:NotificationService) { }

  ngOnInit() {
    
   
  }
  toggleSideBar()
  {
    this.toggleSideBarForMe.emit();
  }

  onLogout(){
    this.userService.deleteToken();
    // this.NotificationService.success('LogOut');
    this.NotificationService.success('Logged out.');


    this.router.navigate(['/login']);
  }
  // onLoad()
  // {
  //   this.User.onLogout;
  // }

}
