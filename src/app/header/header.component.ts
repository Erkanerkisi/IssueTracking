import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TicketService } from '../tickets/ticket.service';
import { Ticket } from '../tickets/ticket/ticket.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../users/user.service';
import { CreateTicketComponent } from '../create/create-ticket.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private ticketservice: TicketService,
    private userService: UserService
    , private vcRef: ViewContainerRef) { }
  comments: any;

  ngOnInit() {
    console.log('Burda');
  }

  ticket:Ticket;
  openCreateDialog() {
    //console.log(this.selectedTicket.ticketName);
    let dialogRef = this.dialog.open(CreateTicketComponent, {
      height: '700px',
      width: '600px',
      viewContainerRef: this.vcRef
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Burda1');
     /*  console.log("dialogRef.afterClosed => ");
      this.ticket = new Ticket(20,
     'Deneme',
     'Deneme',
     'Deneme',
     'Deneme',
     'Deneme',
      this.userService.getUser(1),
      this.userService.getUser(2),
      this.comments
    );
    this.ticketservice.accessTickets().push(this.ticket); */
    for (let entry of this.ticketservice.accessTickets()) {
      console.log(entry.ticketName);
  }
    });

  }
}
