import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/services/constant';

class StudentModel {
    rollNumber: string;
    name: string;
}
@Component({
  selector: 'app-student-list',
  templateUrl: 'student-list.page.html',
  styleUrls: ['student-list.page.scss']
})
export class StudentListPage implements OnInit{
    studentList: StudentModel[] = [];
    stream = '';
    year = '';
    section = '';
    constructor(private router: Router) {}
    ngOnInit() {
        // this.studentList= [{
        //     rollNumber: "101",Stu
        //     name: "Dhane",
        //     branch:"CSC",
        //     yearOfJoining: "2017"
        // },
        // {
        //     rollNumber: "101",
        //     name: "Dhane",
        //     branch:"CSC",
        //     yearOfJoining: "2017"
        // }];

        this.studentList = Constants.STUDENT_LIST;

        console.log(this.studentList.length);
        console.log(this.studentList)
    }

    detailsButtonHandler(student) {
        this.router.navigate(['/student/details/'+student.rollNumber]);
    }
}
