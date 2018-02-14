import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TicketService } from '../../ticket.service';
import { Ticket } from '../../ticket/ticket.model';

@Component({
  selector: 'app-update-window',
  templateUrl: './update-window.component.html',
  styleUrls: ['./update-window.component.css'],
  providers:[TicketService]
})
export class UpdateWindowComponent implements OnInit {
  constructor(
    private ticketservice: TicketService,
    public dialogRef: MatDialogRef<UpdateWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
  updateableTicket: Ticket;

  ngOnInit() {
    this.updateableTicket = this.data.ticket;
   // console.log("Ticket************ => " + this.updateableTicket.ticketName);

  }

  onNoClick(): void {
   // console.log("dialogRef.closed => ");
    this.dialogRef.close();
   // console.log("dialogRef.closed 2 => " + this.updateableTicket.ticketDescription);
  }

/*   onUpdateClick(tic:Ticket): void {
    console.log("update click => " + tic.ticketDescription );
    this.updateableTicket = tic;
    this.dialogRef.close();
  } */


}
