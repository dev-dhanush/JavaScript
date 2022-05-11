import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: String(localStorage.getItem('user')),
    }),
  };

  API = 'http://localhost:8080/ticket';

  getTickets() {
    return this.http.get(this.API + '/getAll').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getTicket() {
    return this.http.get(this.API + '/get');
  }

  deleteTicket(id: Number) {
    return this.http.put(this.API + '/delete/' + id, this.httpOptions);
  }
  updateTicket(id: Number) {
    return this.http.put(this.API + '/update/' + id, this.httpOptions);
  }
  addTicket(Ticket: any) {
    return this.http.post(this.API + '/create/', Ticket, this.httpOptions);
  }
}
