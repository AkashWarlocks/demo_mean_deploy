import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http:HttpClient) { }
  
  public callPost(apiLink:string, data:any) {
    return this.http.post(apiLink, data);
  }

  public callGet(apiLink:any) {
    return this.http.get(apiLink);
  }
}

