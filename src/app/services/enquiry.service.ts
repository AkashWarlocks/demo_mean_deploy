import { Enquiry } from '../models/enquiry.model';
import { RootService } from './root.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EnquiryService {

    constructor(private rootService:RootService) {}

    enquiries: Enquiry[] = [ new Enquiry("0", "shubham", "shubham@gmail.com", "9876541230", "Hi this is shubham")];

    getEnquiries() {
        // const apiLink = 'http://localhost:3000/getEnquiries';
        // this.rootService.callGet(apiLink).subscribe((response: Enquiry[])=>{
        //     console.log(response);
        //     this.enquiries = response;
        //     console.log(this.enquiries);   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.enquiries;
    }

    getEnquiry(_id:string) {
        return this.enquiries.find((enquiry) => enquiry._id === _id);
    }

    sendReply(sendTo: string, subject: string, body: string) {
        const mail = { sendTo, subject, body };
        // const apiLink = 'http://localhost:3000/sendMail';
        // this.rootService.callPost(apiLink, mail).subscribe((response)=>{
        //     console.log('Edited Data is', response);
            console.log(mail);        
        // },
        // (error)=>{
        //     console.log('error during post is ', error);
        // });

    }
}