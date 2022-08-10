import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report-component/report.service';
import { ProfileService } from './profile.service';


@Component ({
selector: 'app-profile',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent implements OnInit, OnDestroy {
  profileData!: any;
  reportData!: any;

  constructor(
    private profileService: ProfileService,
    private reportService :ReportService,
    private activatedRoute: ActivatedRoute
    ){}

  ngOnInit(): void {
    // subscribe for profile service
    // const user_id = this.activatedRoute.snapshot.params['user_id'];
        const user_id: any | null =
          this.activatedRoute.snapshot.paramMap.get('user_id');

    this.profileService.getUsereById(user_id).subscribe((res: any) => {
      this.profileData = res.users;
      console.log('response for user: ', res.users);
    });

    // subscribe for report service
    this.reportService.getReports().subscribe((response: any) => {
      console.log('report response: ', response);
      this.reportData = response.data;
    });
  }


ngOnDestroy(){

}
}
