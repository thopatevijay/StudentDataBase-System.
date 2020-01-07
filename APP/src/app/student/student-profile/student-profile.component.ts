import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../shared/student.service';
import { Student } from '../../shared/student.model';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css'],
  providers: [ StudentService]

})
export class StudentProfileComponent implements OnInit {

id:any;
  data: Object;
  
  constructor(private StudentService: StudentService,private route: ActivatedRoute,) { }

  ngOnInit() {

    this.id=(this.route.snapshot.params['id'])
    this.getOne();
  }
    getOne() 
    {
      this.StudentService.getOne(this.id).subscribe(data =>{

        this.data=data;
        // console.log(this.data);
        // console.log(data);

      })
    }

}