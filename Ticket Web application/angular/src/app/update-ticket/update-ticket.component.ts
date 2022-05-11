import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TicketService } from '../_services/ticket.service';

export interface DialogData {
  ticket_title: String;
  ticket_desc: String;
  editId: Number;
}

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css'],
})
export class UpdateTicketComponent implements Inject {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private ticketService: TicketService,
    private router: Router
  ) {
    this.update_ticket.setValue({
      ticket_title: data.ticket_title,
      ticket_desc: data.ticket_desc,
    });
  }
  message: String;
  currentUser = this.data
  ticket_title: String;
  ticket_desc: String;
  token: any;

  update_ticket = new FormGroup({
    ticket_title: new FormControl(),
    ticket_desc: new FormControl(),
  });

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  handleSubmit = (form: any) => {
    try {
      const response = this.ticketService.updateTicketService(
        form.value,
        this.data.editId
      );
      response.subscribe((data: any) => {
        if (data['data']) {
          this.ticketService.getAllTicketService();
          this.reloadCurrentRoute();
        }
      });
    } catch (error: any) {
      this.message = error['status'];
    }
  };

}
