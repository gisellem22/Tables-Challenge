import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Answer } from '../models/answer';

@Injectable({
  providedIn: 'root'
})
export class GetNumbersService {
  url: string = "http://168.232.165.184/prueba/array"

  constructor(private http: HttpClient) { }

  numbers(): Observable<Answer> {
    return this.http.get<Answer>(this.url)
  }
}
