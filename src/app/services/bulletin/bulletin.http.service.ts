import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bulletin } from './../../api/bulletin';

const base_url = environment.base_url;

@Injectable()
export class BulletinHttpService {

  constructor(private _http: HttpClient) { }

  public  getBulletins(): Observable<Array<Bulletin>> {
    return this._http.get<Array<Bulletin>>(`${base_url}/bulletins/page`);
  }

  public saveBulletin(bulletin: Bulletin): Observable<Bulletin> {
    return this._http.post<Bulletin>(`${base_url}/bulletins`, bulletin);
  }
}
