import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundBlock]'
})
export class RoundBlockDirective implements OnInit {

  @Input() appRoundBlock: string;

  constructor(public elmRef: ElementRef, public renderer: Renderer2) {  }

  ngOnInit() {
      let roundVal = `${this.appRoundBlock}`
      this.renderer.setStyle(this.elmRef.nativeElement,'border-radius',roundVal);
  }

}
