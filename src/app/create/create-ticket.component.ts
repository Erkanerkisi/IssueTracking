import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TicketService } from '../tickets/ticket.service';
import { Ticket } from '../tickets/ticket/ticket.model';
import { User } from '../users/user.model';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  constructor(private ticketService : TicketService,
    private userService:UserService,
    public dialogRef: MatDialogRef<CreateTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ticket: Ticket;
  
  comments: any;
  users: User[] = this.userService.getUsers();
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  OnCreate(form: NgForm) {
    const value = form.value;
    console.log('user => ' + value.itemName);
    console.log('this.ticketservice.getIdSequence() => ' + this.ticketService.getIdSequence());
    this.ticket = new Ticket(this.ticketService.getIdSequence(),
      value.itemName,
      value.itemSubject,
      value.itemDescription,
      value.itemStatus,
      value.itemType,
      this.userService.getUser(value.itemAssignee),
      this.userService.getUser(value.itemReporter),
      this.comments
    );
    console.log('user => ' + this.userService.getUser(value.itemAssignee).userFullName);
    this.ticketService.accessTickets().push(this.ticket);
    this.dialogRef.close();

    /* for (let entry of this.ticketservice.getTickets()) {
      console.log(entry.ticketName);
  } */

  }
}
