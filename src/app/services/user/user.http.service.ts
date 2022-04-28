import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';
import { User } from "../../api/user";

const base_url = environment.base_url;

@Injectable()
export class UserHttpService {
  constructor(private _http: HttpClient) {
  }

  public getUser(): Observable<Array<User>> {
    return this._http.get<Array<User>>(`${base_url}/users`);
  }

  saveUser(user: User): Observable<User> {
    return this._http.post<User>(`${base_url}/users`, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this._http.put<User>(`${base_url}/users/${id}`, user);
  }

  deleteUser(id: Number): Observable<User> {
    return this._http.get<User>(`${base_url}`);
  }
}

/*interface User {
  id?: number;
  accountId: string;
  firstName: string;
  lastName: string;
  createdDate: string;
  isDeleted: boolean;
}*/
