import { AfterViewInit, Component, ElementRef, EventEmitter, input, OnInit, output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../share/button/button.component';
import { ControlComponent } from "../../../share/control/control.component";
import { FormsModule } from '@angular/forms';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit,AfterViewInit {
  ngOnInit(): void {
    console.log("ON INIT")
  }
  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT")
  }

  add = output<{title:string,text:string}>();

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form')


  onSubmit(titleInput:string,ticketTitle:string){
    console.log("SUBMIT!!!");
    console.log(titleInput);
    console.log(ticketTitle);
    this.add.emit({
      title : titleInput,
      text : ticketTitle
    }
    )
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
