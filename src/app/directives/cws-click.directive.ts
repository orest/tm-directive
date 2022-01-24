import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[cwsclick]'
})
export class CwsClickDirective {
  @Input() data;
  constructor(private el: ElementRef, private router: Router) { }
  @HostListener('click', ['$event'])
  onElementClick(event) {

    console.log(event.target.dataset["role"])

    //console.log(this.el.nativeElement["id"]);
    this.router.navigateByUrl("details");


    console.log(this.data);
  }

}
