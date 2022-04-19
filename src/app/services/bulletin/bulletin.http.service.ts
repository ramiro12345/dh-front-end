import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class BulletinHttpService {

  constructor(private http: HttpClient) { }

  getBulletin() {
    return this.http.get(`${base_url}`);
  }
  saveBulletin(data: any) {
    console.log("Datos Bulletin a guardar", data);
    
    return this.http.get(`${base_url}`);
    // return this.http.post(`${base_url}/bulletin/saveBulletin`, data);
  }
  updateBulletin(id: Number, data: any) {
    console.log("Datos Bulletin a actualizar id", id);
    console.log("Datos Bulletin a actualizar", data);
    
    return this.http.get(`${base_url}`);
    // return this.http.put(`${base_url}/bulletin/updateBulletin/${id}`, data);
  }
  deleteBulletin(id: Number) {
    console.log("Datos Bulletin a eliminar id", id);
    
    return this.http.get(`${base_url}`);
    // return this.http.put(`${base_url}/bulletin/deleteBulletin/${id}`,{});
  }
}
