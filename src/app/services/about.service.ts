import { Injectable } from '@angular/core';
import { RootService } from './root.service';
import { AboutModel } from '../models/about.model';

@Injectable()
export class AboutService {

    constructor(private rootService: RootService) {}

    about: AboutModel = new AboutModel(
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    getAbout() {
        // const apiLink = 'http://localhost:3000/getAim';
        // this.rootService.callGet(apiLink).subscribe((response: string)=>{
        //     console.log(response);
        //     this.aim = response;
        //     console.log(this.aim) ;   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.about;
    }

    saveAim(aim: string) {
        // const data : { aim };
        // const apiLink = 'http://localhost:3000/editAim';
        // this.rootService.callPost(apiLink, data).subscribe((response)=>{
        //     console.log('Edited Data is', response);
            this.about.aim = aim;
        // },(error)=>{
        //   console.log('error during post is ', error);       
        // });      
    }

    saveHistory(history: string) {
        // const data : { history };
        // const apiLink = 'http://localhost:3000/editHistory';
        // this.rootService.callPost(apiLink, data).subscribe((response)=>{
        //     console.log('Edited Data is', response);
            this.about.history = history;
        // },(error)=>{
        //   console.log('error during post is ', error);       
        // });      
    }
    savePhilosophy(philosophy: string) {
        // const data : { phillosophy };
        // const apiLink = 'http://localhost:3000/editPhilosophy';
        // this.rootService.callPost(apiLink, data).subscribe((response)=>{
        //     console.log('Edited Data is', response);
            this.about.philosophy = philosophy;
        // },(error)=>{
        //   console.log('error during post is ', error);       
        // });      
    }
}