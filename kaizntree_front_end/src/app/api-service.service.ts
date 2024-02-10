import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  login(username:any,password:any):Observable<any>
  {
    console.log(username,password);
    return this.http.post('127.0.0.1:8000',{'username':username,'password':password});
  }
}
