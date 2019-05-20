import { Branch, BatchModel } from '../models/branch.model';
import{ RootService } from './root.service'
import { Injectable } from '@angular/core';
import { ImageService } from './image.service';

@Injectable()
export class BranchService {

    constructor(private rootService:RootService,
                private image: ImageService) { }

    batch: BatchModel[] = [ new BatchModel("weekDays", "mon, Tue", "Beginner", "5 - 8", "300"), new BatchModel("weekEnds", "sun", "Beginner", "6 - 9", "700")];

    images: string[] = [this.image.getNoImage()];
    
    private branches : Branch[] = [
        new Branch('0', "Thane", "Thane", "Thane - 400607", "example@thane.com", "9876543210", 'desc', this.images, this.batch, "activated")
    ];

    getBranches() {
        const apiLink = '/getBranches';
        this.rootService.callGet(apiLink).subscribe((response: Branch[])=>{
            console.log('response from post data is ', response);
            this.branches = response;
        },
        (error)=>{
            console.log('error during post is ', error);
        });
        return this.branches;
    }

    getBranch(id:string) {
        return this.branches.find((branch) => branch._id === id);
    }

    // This Function will be deleted
    uniqueId() {
        if(this.branches.length>0){
            return (parseInt(this.branches[this.branches.length-1]._id)+1).toString();
        }
        return '0';
    }

    addBranch(branch:string, city: string, address:string, email:string, phone:string, description:string, images: string[], batch: BatchModel[], status: string) {

        const _id:string = this.uniqueId();
        const newBranch = {_id, branch, city, address, email, phone, description, images, batch, status};
        const apiLink = '/addBranches';
        this.rootService.callPost(apiLink, newBranch).subscribe((response)=>{
            console.log('response from post data is ', response);      
            console.log(newBranch);

            this.branches.push(newBranch);
        },
        (error)=>{
            console.log('error during post is ', error);
        });
        return _id;
    }

    //delete branch
    changeStatus(_id:string, status:string) {
        let statusConfirm: any = true;
        if(status === "deactivated") {
            statusConfirm = confirm("do you really want to Deactivate Branch??");
        }  
        if(statusConfirm) {
            // const data = {
            //     _id,
            //     status
            // }
            // const apiLink = 'http://192.168.0.105:3000/changeBranchStatus';
            // this.rootService.callPost(apiLink, data).subscribe((response)=>{
            //     console.log('Deleted data is ',response);
                const i = this.branches.findIndex((branch) => branch._id === _id);
                this.branches[i].status=status;
            // },
            // (error)=>{
            //     console.log('error: ',error);
            // }); 
        }
    }

    editBranch(branch: Branch) {
        // const apiLink = 'http://192.168.0.105:3000/editBranch';
        // this.rootService.callPost(apiLink, branch).subscribe((response)=>{
        //     console.log('Edited Data is', response);
            const i = this.branches.findIndex((thisBranch) => thisBranch._id === branch._id);
            this.branches[i] = branch;
        // },
        // (error)=>{
        //     console.log('error during post is ', error);
        // });
    }
}