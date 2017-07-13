import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `    
    <button (click)="addOne()">+</button>
    {{counterValue}}
    <button (click)="subtractOne()">-</button>   
   
  `,
 
})
export class CounterComponentComponent  {
 counterValue :number = 0;
@Input()
set counter(value) {
    this.counterValue = value;
    
  }

  @Output() counterChange = new EventEmitter<number>();

addOne(){
this.counterValue = this.counterValue + 1;
this.counterChange.emit(this.counterValue);
return false;
}

subtractOne(){
this.counterValue = this.counterValue - 1;
this.counterChange.emit(this.counterValue);
return false;
}


}
