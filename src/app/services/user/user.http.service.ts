import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  constructor(private _http: HttpClient) { }
  loginUser(accountId: any, password: any): Observable<any> {
    return this._http.get(`${base_url}/users/login/${accountId}/${password}`);
  }

  getUser(): Observable<any> {
    return this._http.get(`${base_url}/users`);
  }

  saveUser(data: any): Observable<any> {
    return this._http.post(`${base_url}/users`, data);
  }

  updateUser(id: Number, data: any): Observable<any> {
    return this._http.put(`${base_url}/users/${id}`, data);
  }
  
  deleteUser(id: Number): Observable<any> {
    return this._http.get(`${base_url}`);
  }
}
