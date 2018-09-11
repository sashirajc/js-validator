import { Component,Input } from '@angular/core';
import {JSHINT} from 'jshint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JS-Validator';
  
  @Input() errors: string;
  @Input() jsCode: String;
  @Input() results: Array<Object>;
  
  constructor(){
    this.errors='';
    this.jsCode= '';
  }

  linter(event:string){
    
    JSHINT(event);
    this.errors = JSHINT.errors;
    this.jsCode = event;  
    this.results = Object.entries(JSHINT.data());
  }
}
