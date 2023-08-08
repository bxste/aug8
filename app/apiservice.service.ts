import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  apiUrl = 'http://localhost:3000/library';
  apiUrlBooks = 'http://localhost:3000/books';
  apiUrlBook2 = 'http://localhost:3000/bookNovel';
  apiUrlBook3 = 'http://localhost:3000/bookFantasy';

  //get
  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
  getAllDataBooks():Observable<any>
  {
    return this._http.get(`${this.apiUrlBooks}`);
  }
  getAllDataBook2():Observable<any>
  {
    return this._http.get("http://localhost:3000/bookNovel");
  }

  //create

  createData(data:any):Observable<any>
  {
    console.log(data,'createapi=>');
    return this._http.post(`${this.apiUrl}`,data);
  }

  //delete

  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //update
  updateData(id:any, data:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }

  //singledata
  getSingleData(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }
}
