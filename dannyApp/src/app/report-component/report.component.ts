import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  mydata: IReport[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageName: ['', Validators.required],
      imageUrl: ['', Validators.required],
      postedBy: ['', Validators.required],
      createdAt: [Date, Validators.required],
    });
  }

  onReport(reportForm : FormGroup) {
    console.log('true/false=> this.reportForm.valid', reportForm.valid);
    if (reportForm.valid) {
      this.subscription = this.reportService
        .createReport(reportForm.value)
        .subscribe((res) => {
          console.log('hello', res);
          localStorage.setItem('report', JSON.stringify(res));
        });
    }else{
      //back to error message
      console.log('ERROR')
    }
  }

  ngOnDestroy(): void {
    if (!this.subscription) {
      return;
    } else {
      this.subscription?.unsubscribe();
    }
  }
}
