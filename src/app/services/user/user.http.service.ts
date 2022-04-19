import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private http: HttpClient) { }
  loginUser(accountId: any, password: any){
    return this.http.get(`${base_url}/users/login/${accountId}/${password}`);
  }
  getUser() {
    return this.http.get(`${base_url}/users`);
  }
  saveUser(data: any) {
    return this.http.post(`${base_url}/users`, data);
  }
  updateUser(id: Number, data: any) {
    return this.http.put(`${base_url}/users/${id}`, data);
  }
  deleteUser(id: Number) {
    console.log("Datos a eliminar id", id);
    
    return this.http.get(`${base_url}`);
    // return this.http.put(`${base_url}/user/deteleUser/${id}`,{});
  }
}
