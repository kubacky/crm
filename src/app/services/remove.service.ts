import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoveService {

  private api: string = environment.api;
  private module: string;
  private action: 'cancel' | 'delete';


  constructor(
    private http: HttpClient
  ) { }

  setAction(action: 'cancel' | 'delete'): void {
    this.action = action;
  }

  setModule(module: string): void {
    this.module = module;
  }

  do(idString: string): Observable<any> {
    let api = `${this.api}${this.module}/${this.action}`;

    let data = {
      id: idString
    }
    return this.http.post<any>(api, data);
  }
}