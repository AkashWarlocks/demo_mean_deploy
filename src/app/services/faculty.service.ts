import { Faculty } from '../models/faculty.model';
import{RootService} from './root.service'
import { ImageService } from './image.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FacultyService {

    constructor(private rootService:RootService,
                private image: ImageService) { }

    private faculties : Faculty[] = [
        new Faculty("0", "Faculty", "2019-04-11", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", this.image.getProfileImage(), "faculty@dance.com", "9875463210", "activated")
    ];

    getFaculties() {
        // const apiLink = 'http://localhost:3000/getFaculties';
        // this.rootService.callGet(apiLink).subscribe((response: Faculty[])=>{
        //     console.log(response);
        //     this.faculties = response;
        //     console.log(this.faculties) ;   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.faculties;
    }

    getFaculty(id: string) {
        return this.faculties.find((faculty) => faculty._id === id);
    }

    uniqueId(): string {
        if(this.faculties.length>0){
            return (parseInt(this.faculties[this.faculties.length-1]._id)+1).toString();
        }
        return '0';
    }

    addFaculty(name:string, birthDate:string, description:string, image:string, email:string, phone:string, status:string) {

        
        const _id: string = this.uniqueId();
        const faculty: Faculty = {_id, name, birthDate, description, image, email, phone, status};
        
        // const apiLink = 'http://localhost:3000/addFaculty';
        // this.rootService.callPost(apiLink, faculty).subscribe((response)=>{
        //     console.log(response);
        // },(error)=>{
        //     console.log(error);
        // });
    
        
        this.faculties.push(faculty);
      }

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
            // const apiLink = 'http://localhost:3000/changeFacultyStatus';
            // this.rootService.callPost(apiLink, data).subscribe((response)=>{
            //     console.log('Deleted data is ',response);
                const i = this.faculties.findIndex((faculty) => faculty._id === _id);
                this.faculties[i].status=status;
                // this.branches.splice(index, 1);
            // },(error)=>{
            //     console.log('error: ',error);
            // });
            
        }
    }

    editFaculty(faculty: Faculty) {

        // const apiLink = 'http://localhost:3000/editFaculty';
        // this.rootService.callPost(apiLink, faculty).subscribe((response)=>{
        //     console.log('Edited Data is', response);
            const i = this.faculties.findIndex((thisFaculty) => thisFaculty._id === faculty._id)
            this.faculties[i]=faculty;
        // },(error)=>{
        //   console.log('error during post is ', error);       
        // });      
    }
}