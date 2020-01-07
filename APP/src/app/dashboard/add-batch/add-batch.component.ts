import { Component, OnInit, ViewChild } from '@angular/core';
import { NewbatchService } from '../../shared/newbatch.service';
import { NgForm } from '@angular/forms';
import { NewBatch } from '../../shared/newbatch.module';
import { Routes, RouterModule, Router } from '@angular/router';
import { NotificationService } from '../../shared/notification.service';
import { catchError, map } from 'rxjs/operators';
import { MatTableDataSource, MatSort, MatPaginator,MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css'],
  providers: [ NewbatchService]


})
export class AddBatchComponent implements OnInit {

  constructor(private batchservice: NewbatchService,private router:Router,private NotificationService:NotificationService,) { }
  lstBatch : NewBatch[];
  listData: MatTableDataSource<any>;
  displayedColumns: String[] = ['batchno','course','startdate','enddate','notes','actions'];
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort, {static: false }) sort:MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator:MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.resetBatchForm();
    this.refreshBatchList();
  }
 
  resetBatchForm(form?: NgForm)
  {
    if(form)
    form.reset();
    this.batchservice.selectedBatch = {
      _id:"",
      course_name:"",
      batch_no:"",
      start_date:"",
      end_date:"",
      notes:"",
      
    }
  }

  onSubmit(form : NgForm) {
    if(form.value._id ==""){
    this.batchservice.postBatch(form.value).subscribe((res)=>{
      this.resetBatchForm(form);
      this.refreshBatchList();
      // M.toast({ html:'Saved Successfully', classes: 'rounded'});
      this.NotificationService.success('Data has been saved.');
      // this.onClose();
    });
    }
    else{
      this.batchservice.putBatch(form.value).subscribe((res)=>{
        this.resetBatchForm(form);
        this.refreshBatchList();
        // M.toast({ html:'Updated Successfully', classes: 'rounded'});
        this.NotificationService.success('Updated Successfully.');
    });
    }
  }

  refreshBatchList()
  {
    this.batchservice.getBatchList().subscribe((res)=>{
      this.batchservice.batch = res as NewBatch[];
      this.listData = new MatTableDataSource(this.batchservice.batch);
      this.listData.sort =  this.sort;
      this.listData.paginator = this.paginator;
      // this.listData.filterPredicate = (data, filter) => {
      //   return this.displayedColumns.some(ele => {
      //     return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
      //   });
      // };

    });
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


  onEdit(batch : NewBatch)
  {
    this.batchservice.selectedBatch = batch;
  }


  onDelete(_id: string, form: NgForm){
    if(confirm('Are You sure to delete this record ?')== true){
      this.batchservice.deleteBatch(_id).subscribe((res)=>{
        this.refreshBatchList();
        this.resetBatchForm(form);
        
      });
    }
  }


}
