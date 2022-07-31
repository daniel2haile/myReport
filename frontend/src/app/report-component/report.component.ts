import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IReport } from './report.model';
import { ReportService } from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit, OnDestroy {
  reportForm!: FormGroup;
  subscription!: Subscription;
  mydata : IReport[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportService
    ) {}

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageName: ['', Validators.required],
      images: ['', Validators.required],
      postedBy: ['', Validators.required],
      createdAt: [Date, Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onReport(){
    console.log('true/false=> this.reportForm.valid', this.reportForm.valid);
   if(this.reportForm.valid){
   this.subscription =  this.reportService.report(this.reportForm.value)
    .subscribe((res)=> {
     console.log('hello',res)
     localStorage.setItem('report', JSON.stringify(res))
    })
   }
  }
}
