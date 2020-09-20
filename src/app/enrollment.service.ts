import { Injectable } from '@angular/core';
import { Reg } from './reg';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  enroll(reg: Reg){
    return this._http.post<any>(this._url, reg)
        .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
