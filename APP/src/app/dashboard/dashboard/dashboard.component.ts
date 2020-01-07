import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/student.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  //getting count of student
  totalno = 0;
  count;
  fsdcount = 0;
  rpacount = 0;
  dmcount = 0;
  counter = 0;

  ngOnInit() {
    this.courseCount();
  }

  courseCount() {
    this.studentService.getStudentList().subscribe((data) => {
      this.count = JSON.parse(JSON.stringify(data));
      this.totalno = this.count.length;
      this.count.forEach(item => {
        this.counter++;
        if (item.course == "FSD") {
          this.fsdcount++;
        }
        if (item.course == "RPA") {
          this.rpacount++;
        }
        if (item.course == "Digital Marketing") {
          this.dmcount++;
        }
      })
    })
  }
}
