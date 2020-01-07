import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent : Student;
  students : Student[];

  readonly baseURL = 'http://localhost:3000/students';

  constructor(private http : HttpClient) { }

  postStudent(stud : Student)
  {
    return this.http.post(this.baseURL, stud);
  }

  getStudentList()
  {
    return this.http.get(this.baseURL);
  }

  putStudent(stud: Student)
  {
    return this.http.put(this.baseURL + `/${stud._id}`, stud);
  }
  
  deleteStudent(_id: String)
  {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getOne(id)
  {
    return this.http.get(this.baseURL + `/${id}`);
  }

  popForm(student)
  {
    this.putStudent(student);
    

  }

}                                                             
