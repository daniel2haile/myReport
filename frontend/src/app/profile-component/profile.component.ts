import { Component, OnDestroy, OnInit } from '@angular/core'
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
    private reportService :ReportService
    ){}

  ngOnInit(): void {
     this.profileService.getProfile().subscribe((res : any)=>{
      this.profileData = res.users

      console.log(this.profileData)
    })

    this.reportService.getReports().subscribe((response : any)=>{
      console.log('report', response)
       this.reportData = response.data
    })
  }


ngOnDestroy(){

}
}
