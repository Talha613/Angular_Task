import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:7225/api/Data';

  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
