import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../model/ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output();
  onToggleVisible(){
    this.detailsVisible.update((oldData)=>!oldData);
  }

  onMarkComplete(){
    this.close.emit();
  }
}
