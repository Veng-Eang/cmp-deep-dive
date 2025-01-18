import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../share/button/button.component';
import { ControlComponent } from "../../../share/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit,AfterViewInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')


  onSubmit(titleInput:string,ticketTitle:string){
    console.log("SUBMIT!!!");
    console.log(titleInput);
    console.log(ticketTitle)
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
