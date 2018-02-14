import { Component } from '@angular/core';
import { TicketService } from './tickets/ticket.service';
import { Ticket } from './tickets/ticket/ticket.model';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TicketService,UserService]
})
export class AppComponent {


  constructor() { }

  ngOnInit() {
  
  }

}
