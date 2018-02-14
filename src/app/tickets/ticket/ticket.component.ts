import { Component, OnInit,Input } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input() ticket:Ticket;

  constructor(private ticketService:TicketService) { }

  ngOnInit() {
  }

  onClickTicket(){
    this.ticketService.ticketSelected.emit(this.ticket);
  }

}
