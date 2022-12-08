import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, shareReplay, tap, catchError } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userApiNetCore = "https://localhost:7062/api/Customers";

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "responseType": "text" })
  };

  signupNetCore(customerEmail: string, customerName: string){
    return this.http.post<Customer>(this.userApiNetCore, {customerEmail, customerName}, this.httpOptions).pipe(
     shareReplay()
    );
 }
}
