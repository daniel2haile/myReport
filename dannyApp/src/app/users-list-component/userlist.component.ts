import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProfile } from '../profile-component/profile.model';
import { ProfileService } from '../profile-component/profile.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls : ['./userlist.component.scss']
})

export class UsersListComponent implements OnInit, OnDestroy {
  userslist : IProfile[] = [];
  subscription !: Subscription
  sum : number = 0;
  constructor(
    private userService : ProfileService,
    ){}

  ngOnInit(): void {
 this.subscription = this.userService.getProfile()
 .subscribe((res : any) => {
  this.userslist = res.users
  console.log('usersList',res)
 })
  }

  ngOnDestroy(){
  this.subscription.unsubscribe();
  }

}
