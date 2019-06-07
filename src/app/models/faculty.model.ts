export class Faculty {
    
    public _id: string;
    public facultyName:string;
    public facultyBirthDate: string;
    public facultyDescription:string;
    public facultyImage: string;
    public email:string;
    public facultyPhone:string;
    public facultyStatus: string;

    constructor(id: string, name:string, birthDate: string, description:string, image:string, email:string, phone:string, status: string) {
        this._id = id;
        this.facultyName = name;
        this.facultyBirthDate = birthDate;
        this.facultyDescription = description;
        this.facultyImage = image;
        this.email = email;
        this.facultyPhone = phone;
        this.facultyStatus = status;
    }
}