import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from '../../model/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  tickets : Ticket[] = [];

  onAddTicket(dataTicket : {title:string,text:string}){
    const ticket : Ticket = {
      title : dataTicket.title,
      text : dataTicket.text,
      status: 'open',
      id: Math.random().toString()
    }
    this.tickets.push(ticket);
  }

  onCloseTicket(id:string){
    this.tickets = this.tickets.map((ticket)=>{
      if(ticket.id === id){
        return {...ticket,status:'close'};
      }
      return ticket;
    })
  }
}
