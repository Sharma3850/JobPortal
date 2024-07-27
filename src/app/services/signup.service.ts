import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = 'http://localhost:5000/updates';

  constructor(private http: HttpClient) { }

  // getUpdates(): Observable<any> {
  //   let data = this.http.get<any>(this.apiUrl)
  //   console.log("hitting API", data)
  //   return this.http.get<any>(this.apiUrl);
  // }

  postData(obj:any): Observable<any> {
    console.log(obj)
    return this.http.post<any>("http://localhost:5000/signup",obj).pipe(
      tap(data => console.log('API Response:', data)),
      catchError(error => {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to keep it consistent
      })
    );
  }
}
