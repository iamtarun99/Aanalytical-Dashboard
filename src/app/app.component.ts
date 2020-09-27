import { Component} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data:any;
  type:any;
  period:string = "currentPrice";
 
  constructor(public service:DataService){}

  ngOnInit(){
    this.service.getData().subscribe(res => {
      this.data = res;
      this.type = Array.from (new Set(this.data.map(el =>{
        return el.industryType
      })));
    });
  }

  selectDate(ev){
    this.period = ev;
  }
  
}
