import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private readonly _apiUrl = 'http://localhost:5258/api/';

  delete(endAddress: string): Observable<any> {
    return this.http.delete(`${this._apiUrl}${endAddress}`);
  }
  get(endAddress: string): Observable<any> {
    return this.http.get(`${this._apiUrl}${endAddress}`);
  }

  post(body: any, endAddress: string): Observable<any> {
    return this.http.post(`${this._apiUrl}${endAddress}`, body);
  }
}
