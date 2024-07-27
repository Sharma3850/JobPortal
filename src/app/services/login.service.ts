import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postData(obj:any): Observable<any> {
    console.log(obj)
    return this.http.post<any>("http://localhost:5000/login",obj).pipe(
      tap(data => console.log('API Response:', data)),
      catchError(error => {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to keep it consistent
      })
    );
  }

}
