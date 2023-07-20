import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api = 'https://localhost:44343/api/'


  constructor(private http: HttpClient) { }

  getstudents():Observable<any>{

    return this.http.get(this.api + "student");

  }

  getapplications():Observable<any>{

    return this.http.get(this.api + "application");

  }


}
