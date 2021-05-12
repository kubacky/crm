import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private api: string = `${environment.api}/notes`;

  constructor(
    private http: HttpClient
  ) { }

  getNotes(type: string, id: number): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.api}/get/notes/${type}/${id}`);
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.api}/get/note/${id}`);
  }

  saveNote(note: Note): Observable<any> {
    return this.http.post<any>(`${this.api}/save`, note);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/delete/${id}`);
  }
}
