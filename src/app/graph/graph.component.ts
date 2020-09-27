import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input() data:any;
  @Input() period:String;
  @Input() type;
  fdata:any;
  flag:boolean = false;
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {
    chart:{
      type:'column'
    },
    series:[{
      type:'column',
      name:'',
      showInLegend: false,  
      data: []
    }],
    title:{
      text:"Price chart"
    },
   
    yAxis:{
      allowDecimals: true,
      title:{
        text: 'Price ($)'
      },
      min:0,
      type:'linear'
    },
    xAxis:{
      categories:[],
      crosshair:true,
      type:'category',
      title:{
        text:'Company'
      }
    }
  }; 

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.data){
      let x = this.fdata || this.data;
      this.drawGraph(x,this.period);
    }
  }

  changeType(type){
   this.fdata = type ==="all"?this.data:this.data.filter(x => x.industryType === type);
    this.drawGraph(this.fdata,this.period);
  }

  drawGraph(chartData:any,key){
    let yData = [];
    let xData = [];
    chartData.forEach(element => {
      xData.push(element.company);
      let num = Number(element[key].replace(/[$,]/g, ""));
      yData.push(num);
    });
    this.chartOptions.series[0]['data'] = yData;
    this.chartOptions.xAxis['categories'] = xData;
    this.flag = true;
  }
}
