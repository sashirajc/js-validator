import { Component,Input } from '@angular/core';
import {JSHINT} from 'jshint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JS-Validator';
  
  @Input() errors: String;
  @Input() jsCode: String;
  
  linter(event:string){
    
    JSHINT(event);
    this.errors = JSHINT.errors;
    this.jsCode = event;  
  }
}
