import { Article } from '../models/articles.model';
import { ImageService } from './image.service';
import { Injectable } from '@angular/core';
import { RootService } from './root.service';

@Injectable()
export class ArticleService {

    constructor(private rootService: RootService,
                private image: ImageService) {}

    private articles : Article[] = [ new Article('0', 'What is Lorem Ipsum?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', this.image.getNoImage())];

    getArticles() {
        // const apiLink = 'http://localhost:3000/getArticles';
        // this.rootService.callGet(apiLink).subscribe((response: Article[])=>{
        //     console.log(response);
        //     this.articles = response;
        //     console.log(this.articles) ;   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.articles;
    }

    getArticle(articleId : string) {
        const article = this.articles.find(article => article._id === articleId);
        return article;
    }

    uniqueId() {
        if(this.articles.length>0){
            return this.articles[this.articles.length-1]._id+1;
        }
        return '0';
    }

    addArticle(title:string, body:string, image: string) {

        const _id: string = this.uniqueId();
        const article: Article = {_id, title, body, image};
        // const apiLink = 'http://localhost:3000/addArticle';
        // this.rootService.callPost(apiLink, article).subscribe((response)=>{
        //     console.log(response);
        // },(error)=>{
        //     console.log(error);
        // });
        this.articles.push(article);
    }

    deleteArticle(_id:string) {
        const dltConfirm = confirm("do you really want to delete??");
        if(dltConfirm) {
            // const data = {
            //     _id
            // }
            // const apiLink = 'http://localhost:3000/deleteArticle';
            // this.rootService.callPost(apiLink, data).subscribe((response)=>{
            //     console.log('Deleted data is ',response);
                const i = this.articles.findIndex((faculty) => faculty._id === _id);
                this.articles.splice(i, 1);
            // },
            // (error)=>{
            //     console.log('error: ',error);
            // });
        }
    }

    editArticle(article: Article) {
        // const apiLink = 'http://localhost:3000/editArticle';
        // this.rootService.callPost(apiLink, article).subscribe((response)=>{
        //     console.log('Edited Data is', response);
            const i = this.articles.findIndex(thisArticle => thisArticle._id === article._id);
            this.articles[i] = article;
        // },
        // (error)=>{
        //   console.log('error during post is ', error);       
        // });         
    }
}