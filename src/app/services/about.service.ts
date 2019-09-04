import { Injectable } from '@angular/core';
import { AboutModel } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  private about : AboutModel = null;

  getAbout() {
    return this.about;
  }





}
