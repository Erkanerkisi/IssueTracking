import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket/ticket.model';
import { Comment } from '../comments/comment.model';
import { NgForm } from '@angular/forms';
import { CommentComponent } from '../comments/comment/comment.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { UpdateWindowComponent } from './update-window/update-window.component';


@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {

  selectedTicket:Ticket;
  ticketId:number;
  comment:Comment;
  editMode:boolean = false;

  comments:Comment[]=[]; 

  ticket: Ticket;

  constructor(private route:ActivatedRoute,
              private ticketservice:TicketService,
              public dialog: MatDialog
  ) { }

  ngOnInit() {
    
    this.ticketId= this.route.snapshot.params['id'];
    this.selectedTicket = this.ticketservice.getTicket(this.ticketId);
    
    this.comments = this.selectedTicket.comments; 

    //console.log('this.selectedTicket ' + this.selectedTicket.comments[0].CommentDesc );
  }

  addComment(c :NgForm){
    this.comment = new Comment(1,this.ticketId,c.value['commentdesc']);
    this.selectedTicket.comments.push(this.comment);

 
    c.reset();
    //this.ticketService.accessTickets().push(this.ticket);
 }

 editDetailPanel(detailPanel :NgForm){
  console.log('editDetailPanel =>' +  this.editMode);
  if (this.editMode) {
    this.editMode= false;
  }
  else {
    this.editMode= true;
  }

}

openUpdateDialog() {
  //console.log(this.selectedTicket.ticketName);
  let dialogRef =  this.dialog.open(UpdateWindowComponent, {
    height: '700px',
    width: '600px',
    data: {
      ticket: this.selectedTicket
    }
  });
  
  dialogRef.afterClosed().subscribe(result => {
   // console.log("dialogRef.afterClosed => ");
    //console.log("dialogRef.afterClosed 2 result => " + result);
    if (!result===null){
    this.selectedTicket = result;
  }
   // console.log("dialogRef.afterClosed 2 selectedTicket.ticketDescription => " +this.selectedTicket.ticketDescription);
  });
  

}

}
