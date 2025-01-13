import { Component, input, ViewEncapsulation ,HostBinding, HostListener, inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class : 'control',
    '(click)' : 'onClick()'
  }
})
export class ControlComponent {
// @HostBinding('class') className = 'control';
// @HostBinding('id') idName = 'Titlee';
label=input.required<string>();
private el = inject(ElementRef);
// @HostListener('click')
onClick(){
  console.log("Clicked!");
  console.log(this.el);
}
}
