import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { NgForm } from '@angular/forms';
import { Student } from '../shared/student.model';
import { Routes, RouterModule, Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { MatTableDataSource, MatSort, MatPaginator,MatDialogRef } from '@angular/material';
import { NewbatchService } from '../shared/newbatch.service';




@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [ StudentService]
})
export class StudentComponent implements OnInit {

  

  constructor(private studentService: StudentService,private router:Router,private NotificationService:NotificationService,
    private batchservice: NewbatchService,
    ) { }

  lstStudents : Student[];
  listData: MatTableDataSource<any>;
  displayedColumns: String[] = ['firstName','course','actions'];
  @ViewChild(MatSort, {static: false }) sort:MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator:MatPaginator;
  searchKey: string;

  public remaining_fee:number;


  ngOnInit() {
    this.resetForm();
    this.refreshStudentList();
    this.cal();

 

  }

  resetForm(form?: NgForm)
  {
    if(form)
    form.reset();
    this.studentService.selectedStudent = {
      _id:"",
      first_name:"",
      last_name:"",
      email_id:"",
      contact_no:null,
      address:"",
      city:"",
      state:"",
      gender:"",
      date_of_birth:null,
      // employment_details
      employment_status:null,
      company_name: "",
      years_of_experiance:null,
      key_skills:"",
      // academic_details
      highest_qualification:"",
      disipline:"",
      college_of_study: "",
      degree_completion_year:null,
      percentage:null,
      // payment_details
      schollarship:"",
      total_fee:null,
      first_installment:null,
      remaining_fee:null,
      mode_of_payment:"",
      cheque_no:null,
      transaction_id:"",
      course:"",
      batch_no:null,
    }
  }

  onSubmit(form : NgForm) {
    if(form.value._id ==""){
    this.studentService.postStudent(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshStudentList();
      // M.toast({ html:'Saved Successfully', classes: 'rounded'});
      this.NotificationService.success('Data has been saved.');
      // this.onClose();
    });
    }
    else{
      this.studentService.putStudent(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshStudentList();
        // M.toast({ html:'Updated Successfully', classes: 'rounded'});
        this.NotificationService.success('Updated Successfully.');
    });
    }
  }

  refreshStudentList()
  {
    this.studentService.getStudentList().subscribe((res)=>{
      this.studentService.students = res as Student[];
      this.listData = new MatTableDataSource(this.studentService.students);
      this.listData.sort =  this.sort;
      this.listData.paginator = this.paginator;
      

    });
  } 

  onEdit(stud : Student)
  {
    this.studentService.selectedStudent = stud;
  }

  onSearchClear()
  {
    this.searchKey="";
    this.applyFilter();
  }
  applyFilter()
  {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  onDelete(_id: string, form: NgForm){
    if(confirm('Are You sure to delete this record ?')== true){
      this.studentService.deleteStudent(_id).subscribe((res)=>{
        this.refreshStudentList();
        this.resetForm(form);
        
      });
    }
  }

  
  cal()
  {
    this.remaining_fee = (this.studentService.selectedStudent.total_fee - this.studentService.selectedStudent.first_installment);
  }

  

}
