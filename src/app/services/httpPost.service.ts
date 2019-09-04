import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn : "root"
})
export class HttpPostService {

  constructor(private http: HttpClient) { }

  public httpPost(data: any) : any {

    return this.http.post("/"+data.api, data)
    .pipe(
      map((response: any)=>{
          console.log(response);
          return response;
      }),
      catchError(err => {
          console.log(err)
          return throwError("SOMETHING BAD HAPPENED");
      })
    );
    
  }

  public httpPostAuth(data: any) : any {

    let token = "";
    if(localStorage.getItem('userData')) {
      token = 'Bearer '+JSON.parse(localStorage.getItem('userData'))._token;
    }
    return this.http.post("/"+data.api, data, {
      headers: new HttpHeaders({
        'Authorization': "Bearer "+token
      })
    })
    .pipe(
      map((response: any)=>{
          console.log(response);
          return response;
      }),
      catchError(err => {
          console.log(err)
          return throwError("SOMETHING BAD HAPPENED");
      })
    );
  }
}