import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url="http://localhost:444/api.service.php/getdata";

  constructor(private http: HttpClient) { }

  getDataProject(): Observable<any>{
    return this.http.get(this.url)
  }
}
