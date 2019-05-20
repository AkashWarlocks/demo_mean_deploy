import { StudentModel } from '../models/student.model';
import { Injectable } from '@angular/core';
import { ImageService } from './image.service';

@Injectable()
export class StudentService {

    constructor (private image: ImageService) {}

    students : StudentModel[] = [ new StudentModel('0', "Shubham", "1996-10-17", "A+", "Self Employed", this.image.getProfileImage(), "More", "Father", "", "", "medicle", "9876543210", "shubham@gmail.com", "1/202, Thane - 400605", "0", "weekDays", "Beginner", "activated")];

    getStudents() {
        // const apiLink = 'http://localhost:3000/getStudents';
        // this.rootService.callGet(apiLink).subscribe((response: Student[])=>{
        //     console.log(response);
        //     this.students = response;
        //     console.log(this.students);   
        // },(error)=>{
        //     console.log(error);
        // });
        return this.students;
    }

    getStudent(id:string) {
        return this.students.find((student) => student._id === id);
    }

    uniqueId() {
        if(this.students.length>0){
            return (parseInt(this.students[this.students.length-1]._id)+1).toString();
        }
        return '0';
    }

    addStudent(name:string, birthDate : string, bloodGroup : string, workPlace : string, image: string, firstGuardianName : string, firstGuardianRelation : string, secondGuardianName : string, secondGuardianRelation : string, medicalHistory: string, phone : string, email : string, address : string, branch : string, batch : string, batchName : string, status : string) {
        const _id:string = this.uniqueId();
        const student : StudentModel = {
            _id, name, birthDate, bloodGroup, workPlace, image, firstGuardianName, firstGuardianRelation, secondGuardianName, secondGuardianRelation, medicalHistory, phone, email, address, branch, batch, batchName, status
        }

        // const apiLink = 'http://localhost:3000/addStudent';
        // this.rootService.callPost(apiLink, student).subscribe((response)=>{
        //     console.log(response);
        // },(error)=>{
        //     console.log(error);
        // });

        this.students.push(student);
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
            // const apiLink = 'http://localhost:3000/changeStudentStatus';
            // this.rootService.callPost(apiLink, data).subscribe((response)=>{
            //     console.log('Deleted data is ',response);
                const i = this.students.findIndex((student) => student._id === _id);
                this.students[i].status=status;
                // this.branches.splice(index, 1);
            // },(error)=>{
            //     console.log('error: ',error);
            // });
            
        }
    }

    editStudent(student: StudentModel) {

        // const apiLink = 'http://localhost:3000/editStudent';
        // this.rootService.callPost(apiLink, student).subscribe((response)=>{
        //     console.log('Edited Data is', response);
        const i = this.students.findIndex(thisStudent => thisStudent._id === student._id);
        this.students[i] = student;
        // },
        // (error)=>{
        //   console.log('error during post is ', error);       
        // });   
        
    }
}