import { Component, OnInit } from '@angular/core';
import { HttpPostService } from '../../services/httpPost.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-gallary',
  templateUrl: './admin-gallary.component.html',
  styleUrls: ['./admin-gallary.component.css']
})
export class AdminGallaryComponent implements OnInit {

  images : string[] = [];
  loading = true;

  constructor(private httpPostService: HttpPostService) {}

  ngOnInit() {
    const data = { api : "getImages", data : {}}    
    this.httpPostService.httpImagePost(data.api, data.data)
    .subscribe(responseData => {
      this.images = responseData.imagePath;
      this.loading = false;
    },
    (error) => {
      this.loading = false;
      console.log(error);
    });
    
    this.loading = false;
  }

  deleteImage(index : number) {
    const changeImgs  = this.images;
    const image = changeImgs[index].substring(changeImgs[index].lastIndexOf('/') + 1);
    changeImgs.splice(index, 1);

    const imgData = {
      image,
      imagePath : changeImgs
    };
    
    const postData = new FormData();
    postData.append("data", JSON.stringify(imgData));

    this.loading = true;
    const data = { api : "deleteImage", data : imgData}
    this.httpPostService.httpImagePost(data.api, data.data)
    .subscribe(res => {
      this.ngOnInit();
    },
    (error) => {
      this.loading = false;
      console.log(error);
    });
  }
}
