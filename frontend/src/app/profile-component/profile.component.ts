import { Component, OnDestroy, OnInit } from '@angular/core'
import { ProfileService } from './profile.service';


@Component ({
selector: 'app-profile',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit, OnDestroy {

  constructor(private profileService: ProfileService){}

  ngOnInit(): void {
    // const user_id = 
  }


ngOnDestroy(){

}
}
