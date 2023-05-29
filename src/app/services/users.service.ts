import { HttpClient } from '@angular/common/http';
import { Injectable, Injector, Signal } from '@angular/core';
import { Users } from '../interfaces/user';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient, private injector: Injector) { }

  public getUsers(): Signal<Users[]> {
    return toSignal(this.http.get<Users[]>(this.baseUrl), { initialValue: [], injector: this.injector });
  }
}
