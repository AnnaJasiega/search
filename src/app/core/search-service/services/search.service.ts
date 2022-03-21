import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  spinnerCount = 0;
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  getList(): Observable<User[]> {
    this.spinnerStart();
    return this.http
      .get<User[]>(`${environment.apiUrl}/users/`)
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.spinnerStop();
          }, 500)
        })
      );
  }
  getUserDetails(id: string | null): Observable<User> {
    this.spinnerStart();
    return this.http
      .get<User>(`${environment.apiUrl}/users/${id}`)
      .pipe(
        finalize(() => {
          setTimeout(() => {
            this.spinnerStop();
          }, 500)
          
        })
      );
  }
  spinnerStart(): void {
    this.spinner.show();
    this.spinnerCount++;
  }
  spinnerStop(): void {
    this.spinnerCount--;
    if (this.spinnerCount === 0) {
      this.spinner.hide();
    }
  }
}
