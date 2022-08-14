import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReportService } from '../report-component/report.service';
import { IProfile } from './profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileData!: IProfile;
  reportData!: any;
  user_id!: any;

  subscription!: Subscription;

  constructor(
    private profileService: ProfileService,
    private reportService: ReportService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userDetails();
    this.Reports();
  }

  Reports(): void {
    // subscribe for report service
    this.reportService.getReports().subscribe((response: any) => {
      console.log('report response: ', response);
      this.reportData = response.data;
    });
  }

  userDetails(): void {
    //get the user id
    this.user_id = this.activatedRoute.snapshot.paramMap.get('user_id');
    this.profileService.getUsereById(this.user_id).subscribe((res: any) => {
      this.profileData = res.user;
      console.log('response for user: ', res.user);
      console.log('user_id', this.user_id);
    });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
