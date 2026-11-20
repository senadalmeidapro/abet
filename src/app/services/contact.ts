import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = '/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(data: ContactData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
