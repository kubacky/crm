import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private api: string = environment.api + 'tasks/';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(type: string, id: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.api}/get/tasks/${type}/${id}`);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.api}/get/task/${id}`);
  }

  saveTask(task: Task): Observable<any> {
    return this.http.post<any>(`${this.api}/save`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/delete/${id}`);
  }
}
