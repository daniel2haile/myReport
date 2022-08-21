import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';
import { IReport } from './report.model';

@Injectable()
export class ReportService {
  private REPORT_URL = 'http://localhost:8088/report';

  constructor(private http: HttpClient) {}

  createReport(report: IReport[]): Observable<IReport[]> {
    return this.http.post<IReport[]>(this.REPORT_URL, report);
  }

  getReports(): Observable<IReport> {
    return this.http.get<IReport>(this.REPORT_URL);
  }
  
}
