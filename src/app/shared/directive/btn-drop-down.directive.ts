import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBtnDropDown]'
})
export class BtnDropDownDirective {

  @Input() appBtnDropDown !: string;

  isExpanded : boolean = false

  constructor(
    private eleRef : ElementRef,
    private render : Renderer2,
  ) { }

  @HostListener('click', ['$event'])
   OnBtnClick(eve : Event){
      let btnControl = this.eleRef.nativeElement.nextSibling as HTMLElement
      if(!this.isExpanded){
       this.render.addClass(btnControl , this.appBtnDropDown)
        this.isExpanded = true;
      }else{
        this.render.removeClass(btnControl , this.appBtnDropDown)
        this.isExpanded = false;
      }
   }

}
