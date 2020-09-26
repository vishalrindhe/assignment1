import { Injectable } from '@angular/core';
import { Reg } from './reg';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';
  listRegs: any;
  listregs: any;

  constructor(private _http: HttpClient) { }

  enroll(reg): Observable<any>{
    return this._http.post<any>(this._url, reg)
  } 
  getProfile(id): Observable<any>{
    return this._http.get<any>(this._url+"/"+id)
  }
  
}
 
