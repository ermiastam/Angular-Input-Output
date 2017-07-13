import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
public counter:number = 1;
public currentValue:number = 1;
getCurrentValue(current){
 this.currentValue = current;
}

}
