import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Ticket } from './ticket/ticket.model';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  theTicket : Ticket;
  p: number = 1;
  
  constructor(private ticketService: TicketService) { }

  //tickets :Ticket[] = this.ticketService.getTickets();
  tickets :Ticket[];
  ngOnInit() {
    console.log('Burda3');
    this.ticketService.ticketSelected.subscribe(
      (ticket:Ticket) => {
        this.theTicket = ticket;
      }
    );


    this.ticketService.cast.subscribe(tic => this.tickets = tic);

  }
  
  selectTicket(){

  }


  
}
