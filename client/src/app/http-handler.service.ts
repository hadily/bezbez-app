import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {
  constructor(private http: HttpClient) {}

  signup(userData: any) {
    return this.http.post<any>('http://127.0.0.1:8000/api/signup/', userData).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error); // Throw the error back to the caller
      })
    );
  }
  login(userData:any){
    return this.http.post<any>('http://127.0.0.1:8000/api/login/', userData).pipe(  
      catchError((error: HttpErrorResponse) => {
        return throwError(error); // Throw the error back to the caller
      })
    );
  }
}
