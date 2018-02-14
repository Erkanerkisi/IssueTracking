import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketComponent } from './tickets/ticket/ticket.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { UpdateTicketComponent } from './tickets/update-ticket/update-ticket.component';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './tickets/comments/comments.component';
import { CommentComponent } from './tickets/comments/comment/comment.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UsersComponent } from './users/users.component';
import { UpdateWindowComponent } from './tickets/update-ticket/update-window/update-window.component';
import { MatDialogModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTicketComponent } from './create/create-ticket.component';
import { TicketService } from './tickets/ticket.service';
import { UserService } from './users/user.service';


const appRoutes: Routes = [
  {    path: '', component: TicketsComponent  },
  {    path: 'dashboard', component: TicketsComponent  },
  {    path: 'ticket/:id', component: UpdateTicketComponent },
  {    path: 'create', component: CreateTicketComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TicketsComponent,
    TicketComponent,
    TicketDetailComponent,
    CreateTicketComponent,
    UpdateTicketComponent,
    CommentsComponent,
    CommentComponent,
    UsersComponent,
    UpdateWindowComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPaginationModule,    
    FormsModule,
    HttpModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdateWindowComponent,UpdateTicketComponent]

})
export class AppModule { }
