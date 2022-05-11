import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/api/ticket/';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  public getTicketService(id: Number) {
    return this.http.get(AUTH_API + '/get/' + id);
  }

  public getAllTicketService() {
    return this.http.get(AUTH_API + '/getAll').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public createTicketService(ticket: any) {
    return this.http.post(AUTH_API + '/create', ticket);
  }

  public updateTicketService(ticket: any, id: Number) {
    return this.http.put(AUTH_API + '/update/' + id, ticket);
  }

  public deleteTicketService(id: Number) {
    return this.http.delete(AUTH_API + '/delete/' + id);
  }
}
