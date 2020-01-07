import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../shared/student.service';
import { NgForm } from '@angular/forms';
import { Student } from '../../shared/student.model';
import { Routes, RouterModule, Router } from '@angular/router';
import { NotificationService } from '../../shared/notification.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { StudentComponent } from '../student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService]

})
export class StudentListComponent implements OnInit {

  constructor(private studentService: StudentService, private NotificationService: NotificationService,
    private dialog: MatDialog) { }
  lstStudents: Student[];
  AlbumSelected: string;
  listData: MatTableDataSource<any>;
  displayedColumns: String[] = ['firstName', 'course', 'batchno', 'contactno', 'email', 'remainingamt', 'actions'];
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;



  ngOnInit() {
    this.resetForm();
    this.refreshStudentList();






  }

  refreshStudentList() {
    this.studentService.getStudentList().subscribe((res) => {
      this.studentService.students = res as Student[];
      this.listData = new MatTableDataSource(this.studentService.students);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;

    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onEdit(stud: Student) {
    this.studentService.selectedStudent = stud;
  }


  onDelete(_id: string, form: NgForm) {
    if (confirm('Are You sure to delete this record ?') == true) {
      this.studentService.deleteStudent(_id).subscribe((res) => {
        this.refreshStudentList();
        // this.resetForm(form);
        // M.toast({ html : 'Delete Successfully', classes: 'rounded'});

      });
    }
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.studentService.selectedStudent = {
      _id: "",
      first_name: "",
      last_name: "",
      email_id: "",
      contact_no: null,
      address: "",
      city: "",
      state: "",
      gender: "",
      date_of_birth: null,
      // employment_details
      employment_status: null,
      company_name: "",
      years_of_experiance: null,
      key_skills: "",
      // academic_details
      highest_qualification: "",
      disipline: "",
      college_of_study: "",
      degree_completion_year: null,
      percentage: null,
      // payment_details
      schollarship: "",
      total_fee: null,
      first_installment: null,
      remaining_fee: null,
      mode_of_payment: "",
      cheque_no: null,
      transaction_id: "",
      course: "",
      batch_no: null,

    }

  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.studentService.postStudent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshStudentList();
        // M.toast({ html:'Saved Successfully', classes: 'rounded'});
        this.NotificationService.success('Data has been saved.');

      });
    }
    else {
      this.studentService.putStudent(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshStudentList();
        // M.toast({ html:'Updated Successfully', classes: 'rounded'});
        this.NotificationService.success('Updated Successfully.');
      });
    }
  }

  OnEdit(stud: Student) {
    this.resetForm();
    this.refreshStudentList();

    this.studentService.popForm(stud);
    this.studentService.selectedStudent = stud;

    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "100%";

    this.dialog.open(StudentComponent, dialogConfig);


  }



}
