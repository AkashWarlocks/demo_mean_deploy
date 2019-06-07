import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

declare var $:any;

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { 
    
  } 
  ngOnInit() {
    document.body.classList.add('bg-about');

  }
  ngOnDestroy(){
    document.body.classList.remove('bg-about');
  }

  

}
