import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NewBatch } from './newbatch.module';

@Injectable({
  providedIn: 'root'
})
export class NewbatchService {
  selectedBatch : NewBatch;
  batch : NewBatch[];

  readonly baseURL = 'http://localhost:3000/batch';

  constructor(private http: HttpClient) { }

  postBatch(batch : NewBatch)
  {
    return this.http.post(this.baseURL, batch);
  }

  getBatchList()
  {
    return this.http.get(this.baseURL);
  }

  putBatch(batch: NewBatch)
  {
    return this.http.put(this.baseURL + `/${batch._id}`,batch);
  }

  deleteBatch(_id: string)
  {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

  getOneBatch(id)
  {
    return this.http.get(this.baseURL + `/${id}`);
  }

}
