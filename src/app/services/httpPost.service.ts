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
    return this.http.post("/dancingSoul", data, {
      headers: new HttpHeaders({
        'Authorization': ""+localStorage.getItem("access_token")
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
    );;

  }

}