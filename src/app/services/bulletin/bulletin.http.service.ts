import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class BulletinHttpService {

  constructor(private http: HttpClient) { }

  getBulletins(): Observable<any> {
    return this.http.get(`${base_url}`);
  }

  saveBulletin(data: any): Observable<any> {
    return this.http.post(data, `${base_url}`);
  }
}
