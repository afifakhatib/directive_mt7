import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCreditcard]'
})
export class CreditcardDirective implements OnInit{

  errorMsg !: HTMLParagraphElement;

  constructor(
    private eleRef : ElementRef,
    private render : Renderer2,
  ) { }

  ngOnInit(): void {
    this.errorMsg = document.createElement('p');
    this.errorMsg.innerHTML = `Please Enter Valid Value..`
    this.errorMsg.className = `text-danger`
    this.render.parentNode(this.eleRef.nativeElement).append(this.errorMsg)
    this.errorMsg.style.display = 'none';
  }

  @HostListener('keyup' , ['$event'])
    onkeyUp(eve : Event){
      let inputControl = eve.target as HTMLInputElement;
      let val = inputControl.value as string;
      
      val = val.replace(/\s+/g, '')

      if(val.length > 16){
        val = val.substring(0 , 16)
      }

      if(/[^\d]/.test(val)){
        //  this.errorMsg = document.createElement('p');
        //  this.errorMsg.innerHTML = `Please Enter Valid Value..`
        //  this.errorMsg.className = `alert alert-danger text-danger`
        //  inputControl.parentNode?.append(this.errorMsg)
        this.errorMsg.style.display = 'block';
      }else{
        this.errorMsg.style.display = 'none';
      }

      val = this.formatedInChunk(val)
      
      inputControl.value = val;
    }

    formatedInChunk = (val : string) => {
      let chunkArr = []
      for(let i =0 ; i < val.length ; i += 4){
        chunkArr.push(val.slice(i,i+4))
      }
      return chunkArr.join(' ')
    }
}
